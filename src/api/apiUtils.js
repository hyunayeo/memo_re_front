export default {
    extractURL(origin, targetType) {
        let url = origin["_links"][`${targetType}`]["href"];
        url = url.split('/');
        url = url.slice(3);
        url = "/" + url.join("/");
        return url;
    },
    trimDate(originDate) {
        return originDate.split('T')[0];
    }
}