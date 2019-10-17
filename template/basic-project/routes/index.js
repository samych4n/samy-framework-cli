export function applyRoutes(app, routes) {
    routes.forEach(function (route) {
        switch (route.method) {
            case 'GET':
                app.get(route.path, route.function);
                break;
            case 'POST':
                app.post(route.path, route.function);
                break;
            case 'PUT':
                app.put(route.path, route.function);
                break;
            case 'DELETE':
                app.delete(route.path, route.function);
                break;
            default:
                throw new Error("[APP FACTORY] method '" + route.method + "' nao encontrado");
        }
    });
}
