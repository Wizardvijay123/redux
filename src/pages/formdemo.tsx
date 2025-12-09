import React, { useState } from "react";

type FormData = {
    fullName: string;      // text
    age: string;           // number (we keep as string in state)
    email: string;         // email
    password: string;      // password
    role: string;          // select dropdown
    gender: string;        // radio
    agree: boolean;        // checkbox
    about: string;         // text area
};

const FormDemo: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        age: "",
        email: "",
        password: "",
        role: "",
        gender: "",
        agree: false,
        about: "",
    });

    const [submittedData, setSubmittedData] = useState<FormData | null>(null);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value, type } = e.target;

        // ✅ Only HTMLInputElement can have 'checked'
        if (type === "checkbox" && e.target instanceof HTMLInputElement) {
            setFormData((prev) => ({
                ...prev,
                [name]: e.target.checked,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmittedData(formData);
        console.log("Form submitted:", formData);
    };

    return (
        <div>
            <h1>Form Demo 📝</h1>
            <p>Example form using useState to store all field values.</p>

            <form onSubmit={handleSubmit} style={{ maxWidth: 500, marginTop: 16 }}>
                {/* Text input */}
                <div style={{ marginBottom: 12 }}>
                    <label>
                        Full Name:
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            style={{ width: "100%", padding: 8, marginTop: 4 }}
                            required
                        />
                    </label>
                </div>

                {/* Number input */}
                <div style={{ marginBottom: 12 }}>
                    <label>
                        Age:
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            placeholder="Enter your age"
                            style={{ width: "100%", padding: 8, marginTop: 4 }}
                            min={0}
                        />
                    </label>
                </div>

                {/* Email */}
                <div style={{ marginBottom: 12 }}>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            style={{ width: "100%", padding: 8, marginTop: 4 }}
                            required
                        />
                    </label>
                </div>

                {/* Password */}
                <div style={{ marginBottom: 12 }}>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter a password"
                            style={{ width: "100%", padding: 8, marginTop: 4 }}
                            required
                        />
                    </label>
                </div>

                {/* Select dropdown */}
                <div style={{ marginBottom: 12 }}>
                    <label>
                        Role:
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            style={{ width: "100%", padding: 8, marginTop: 4 }}
                        >
                            <option value="">Select a role</option>
                            <option value="student">Student</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                        </select>
                    </label>
                </div>

                {/* Radio buttons */}
                <div style={{ marginBottom: 12 }}>
                    <span>Gender:</span>
                    <div style={{ marginTop: 4 }}>
                        <label style={{ marginRight: 12 }}>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={formData.gender === "male"}
                                onChange={handleChange}
                            />{" "}
                            Male
                        </label>
                        <label style={{ marginRight: 12 }}>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={formData.gender === "female"}
                                onChange={handleChange}
                            />{" "}
                            Female
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="other"
                                checked={formData.gender === "other"}
                                onChange={handleChange}
                            />{" "}
                            Other
                        </label>
                    </div>
                </div>

                {/* Checkbox */}
                <div style={{ marginBottom: 12 }}>
                    <label><input
                        type="checkbox"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                    />I agree to the terms and conditions
                    </label>
                </div>

                {/* Textarea */}
                <div style={{ marginBottom: 12 }}>
                    <label>
                        About You:
                        <textarea
                            name="about"
                            value={formData.about}
                            onChange={handleChange}
                            placeholder="Tell us something about yourself..."
                            style={{ width: "100%", padding: 8, marginTop: 4, minHeight: 80 }}
                        />
                    </label>
                </div>

                <button
                    type="submit"
                    disabled={!formData.agree}
                    style={{
                        padding: "8px 16px",
                        borderRadius: 6,
                        border: "none",
                        cursor: "pointer",
                        background: "#2563eb",
                        color: "#fff",
                        fontWeight: 600,
                    }}
                >
                    Submit
                </button>
            </form>

            {/* Show submitted data */}
            {submittedData && (
                <div
                    style={{
                        marginTop: 24,
                        padding: 16,
                        borderRadius: 8,
                        background: "#020617",
                    }}
                >
                    <h2>Submitted Data</h2>
                    <pre style={{ whiteSpace: "pre-wrap" }}>
                        {JSON.stringify(submittedData, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
};

export default FormDemo;
