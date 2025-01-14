import dbConnect from "@/lib/dbConnect";
import AdminModel from "@/models/admin/AdminSchema";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await dbConnect();
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        success: false,
        message: "Email and password are required",
      });
    }

    try {
      const user = await AdminModel.findOne({ email });
      if (!user) {
        return res.json({ success: false, message: "User not found" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.json({ success: false, message: "Invalid credentials" });
      }

      const token = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      //   const { password, ...filterUser } = user.toObject();
      const filterUser = {
        email: user?.email,
        name: user?.name,
        id: user?._id,
      };

      return res.status(200).json({
        success: true,
        message: "Login successful",
        data: { token: token, user: filterUser },
      });
    } catch (error) {
      return res.json({ success: false, message: "Something went wrong" });
    }
  } else {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }
}
