// pages/api/sendEmail.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.FROM_EMAIL,
    pass: process.env.FROM_EMAIL_PASSWORD,
  },
});

export async function POST(req, res) {
  if (req.method === "POST") {
    const formData = await req.json();
    console.log(formData);
    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: "New Form Submission",
      html: `
      <p><strong>First Name:</strong> ${formData.firstName}</p>
      <p><strong>Last Name:</strong> ${formData.lastName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone Number:</strong> ${formData.phoneNumber}</p>
      <p><strong>Country:</strong> ${formData.country}</p>
      <p><strong>Location:</strong> ${formData.location}</p>
      <p><strong>Requirements:</strong> ${formData.requirements}</p>
     
      <p><strong>Event Type:</strong> ${formData.eventType}</p>
      <p><strong>Start Date:</strong> ${formData.startDate}</p>
      <p><strong>End Date:</strong> ${formData.endDate}</p>
      <p><strong>Service Hours Per Day:</strong> ${formData.serviceHours}</p>
      <p><strong>Interests:</strong> ${formData.interests.join(", ")}</p>
    `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
      return NextResponse.json(
        { message: "Email sent successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { message: "Internal Server Error" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 500 }
    );
  }
}
