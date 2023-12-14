import {submitProductSelectionToLogisticsService} from "@/backend/service/logisticsIntegrationService";

/*
 * Any route.ts file under /app/api becomes a route handler. The route is defined by the folder structure and naming.
 * The methods for the route are defined by function names in the routehandler. Routes are server components
 * so none of their code is bundled within the client package, thus they can access any server side secrets,
 * integrations and databases etc.
 */

export const dynamic = 'force-dynamic' // defaults to auto
export async function POST(request: Request) {
    const product = await request.json()
    submitProductSelectionToLogisticsService(product);
    return Response.json({ product })
}