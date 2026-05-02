(async () => {
    const scriptTag = document.currentScript;
    const url = new URL(scriptTag.src);
    if (!url.searchParams.has("frameid")) {
        console.error("Barmoury Data Studio: The frame id is not set, you need to set it like 'bds.js?=frameid=[iframe-id]'");
        return;
    }
    const fullUrl = document.currentScript.src;
    const pathOnly = fullUrl.substring(0, fullUrl.split("?")[0].lastIndexOf('/') + 1);
    const studioFrame = document.getElementById(url.searchParams.get('frameid'));
    const bdsHtmlUrl = url.searchParams.get('bdshtml') ?? `${pathOnly}/bds.html`;
    studioFrame.src = bdsHtmlUrl + "?" + (new URLSearchParams({
        tables: url.searchParams.get('tables') ?? "",
        databases: url.searchParams.get('databases') ?? "",
        queryroute: url.searchParams.get('queryroute') ?? "",
        postmessagekey: url.searchParams.get('postmessagekey') ?? "",
    })).toString();
})();
