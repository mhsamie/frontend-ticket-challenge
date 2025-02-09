import { http, HttpResponse } from "msw";
import genUid from "light-uid";
import db from "./db.json";
import { TicketLocation } from "../../../types";

// Define the request handlers for the server
export const handlers = [
    // GET handler for '/maps' endpoint
    // Returns the keys of the 'maps' object in the database as a JSON response
    http.get("/maps", () => {
        const maps = Object.keys(db.data.maps);
        if (maps.length === 0) {
            return new HttpResponse(null, { status: 500 });
        }
        return HttpResponse.json(maps);
    }),

    // GET handler for '/maps/:map_id' endpoint
    // Returns the 'seats' array of the specified map as a JSON response
    http.get("/maps/:map_id", async ({ params }) => {
        const id = params.map_id;
        //@ts-ignore
        const selectedMap = db.data.maps[id];
        if (!selectedMap) {
            return new HttpResponse(null, { status: 500 });
        }
        return HttpResponse.json(selectedMap?.seats || []);
    }),

    // POST handler for '/maps/:map_id/ticket' endpoint
    // Reserves a seat on the specified map and creates a ticket for it
    http.post("/maps/:map_id/ticket", async ({ request, params }) => {
        const res = (await request.json()) as TicketLocation;
        let result;

        const map_id = params.map_id;
        const x = res.x;
        const y = res.y;
        const map = db.data.maps;
        //@ts-ignore
        if (map[map_id].seats[x][y] === 0) {
            //@ts-ignore
            map[map_id].seats[x][y] = 1;

            const ticket = { id: genUid(24), x, y, map_id };

            result = { status: "success", ticket, message: "Your seat reserved successfully." };
        } else {
            result = { status: "failed", message: "Seat is already reserved." };
        }

        return HttpResponse.json(result);
    }),
    //to handle undefiend routes
    http.get("*", async () => {
        return new HttpResponse(null, { status: 404 });
    })

];
