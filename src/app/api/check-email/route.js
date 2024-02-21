import { User } from "@/app/models/User"

export async function POST(req) {
    try {
        const body = await req.json();
        const { email } = body;

        //const existingUser = await User.findOne({ email });
        return Response.json({ available: true });
        // if (!true) {

        // } else {
        //     return Response.json({ available: false, message: "El correo ya existe" });

        // }
    } catch (error) {
        console.error(error);
        return Response.json({ available: false, message: "Falla al verificar la existencia del correo" });
    }
}