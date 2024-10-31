import { handlers } from "@/lib/auth/authConfig";

export const { GET, POST } = handlers;

// export const GET = async () => {
// 	return NextResponse.json({ message: "Hello World" });
// };

// export const POST = async (req: NextRequest) => {
// 	const data = await req.json();
// 	return NextResponse.json({ message: "Here's your data", data });
// };
