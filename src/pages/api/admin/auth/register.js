import dbConnect from "@/lib/dbConnect";
import AdminModel from "@/models/admin/AdminSchema";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await dbConnect();

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    try {
      const existingUser = await AdminModel.findOne({ email });
      if (existingUser) {
        return res
          .status(400)
          .json({ success: false, message: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await AdminModel.create({
        name,
        email,
        password: hashedPassword,
      });

      return res
        .status(201)
        .json({ message: "User registered successfully", data: user });
    } catch (error) {
      return res.status(500).json({ error: "Something went wrong" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
