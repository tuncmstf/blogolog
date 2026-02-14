
export const onRequest = async ({ request, next }) => {
    const url = new URL(request.url);

    // Sadece pages.dev isteğini yakala (loop olmasın)
    if (url.hostname.endsWith(".pages.dev")) {
        const target = new URL(request.url);
        target.hostname = "blogolog.com.tr";
        target.protocol = "https:";
        return Response.redirect(target.toString(), 301);
    }

    return next();
};
