const nodemailer = require("nodemailer");

/**
 * Send email using Nodemailer
 * @route POST /api/contact
 */
exports.sendEmail = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, email, and message",
      });
    }

    // Create a transporter using SMTP
    let transporter = nodemailer.createTransport({
      service: "gmail", // For Gmail. For other providers, use host, port, etc.
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: `"PortfolioV1 Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECIPIENT || "rianseptiawan@infitech.or.id",
      replyTo: email, // This allows you to reply directly to the sender
      subject: subject || `New Contact Form Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
  <h2 style="color: #4f46e5; margin-bottom: 20px;">Pesan Baru Dari Submission PortfolioV1</h2>
  
  <div style="margin-bottom: 20px; padding: 15px; background-color: #f9fafb; border-radius: 4px;">
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    <p><strong>Subject:</strong> ${subject || "Not specified"}</p>
  </div>
  
  <div style="border-left: 4px solid #4f46e5; padding-left: 15px; margin-bottom: 20px;">
    <h3 style="color: #4b5563; margin-bottom: 10px;">Message:</h3>
    <p style="white-space: pre-line; color: #4b5563;">${message}</p>
  </div>
  
  <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
    GG.
  </p>
</div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully");

    res.status(200).json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send your message",
      error: error.message || "Unknown error",
    });
  }
};
