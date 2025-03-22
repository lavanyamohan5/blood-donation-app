import { Link } from "react-router-dom";
import "../styles.css"; // Import the updated CSS

function Home() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
            
            {/* 🌟 Hero Section */}
            <section className="hero">
                <h1>🩸 Give Blood, Save Lives!</h1>
                <p>"Every blood donor is a hero. Your contribution can change lives."</p>
                <div className="mt-6 flex justify-center space-x-4">
                   
                </div>
            </section>

            {/* 📊 Impact Statistics */}
            <section className="w-full max-w-5xl mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { number: "5000+", text: "Donors Registered" },
                    { number: "200+", text: "Blood Requests Fulfilled" },
                    { number: "10,000+", text: "Lives Saved" },
                    { number: "5 Min", text: "To Register as a Donor" },
                ].map((item, index) => (
                    <div key={index} className="stat-box">
                        <h2>{item.number}</h2>
                        <p>{item.text}</p>
                    </div>
                ))}
            </section>

            {/* 🔄 How It Works (Now in a Single Line & Clickable) */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8">How It Works?</h2>

                    {/* Strict Horizontal Layout with Clickable Boxes */}
                    <div className="steps-container">
                        {[
                            { title: "Register", icon: "📝", desc: "Sign up and become a donor in just minutes.", link: "/register" },
                            { title: "Get Matched", icon: "🔍", desc: "We connect you with those in need.", link: "/requests" },
                            { title: "Donate & Save Lives", icon: "❤️", desc: "Make a difference by donating blood.", link: "/donors" }
                        ].map((step, index) => (
                            <Link key={index} to={step.link} className="step-card">
                                <div className="step-icon">{step.icon}</div>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                                <div className="underline"></div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

           {/* 🎉 Success Stories */}
            <section className="bg-white py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">Success Stories</h2>
                    <p className="text-lg text-gray-600 mb-8">Read how blood donation has changed lives:</p>
                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { link: "https://lavanyamohan7.wordpress.com/2025/03/22/blood-recipient-stories/" },
                        ].map((story, index) => (
                            <a 
                                key={index} 
                                href={story.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-gray-100 p-6 w-80 rounded-lg shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-lg flex flex-col items-center"
                            >
                                <h3 className="text-2xl font-semibold text-red-600">{story.title}</h3>
                                <p className="text-gray-600 mt-2">Click to explore inspiring stories.</p>
                                <div className="w-16 h-1 bg-red-500 mt-4 rounded-full"></div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🔥 Call to Action */}
            <section className="w-full max-w-5xl mt-10 text-center">
                <h2 className="text-xl font-semibold">Join the Lifesaving Movement!</h2>
                <div className="mt-6 flex justify-center space-x-4">
                    <Link to="/register" className="btn-main">
                        Become a Donor
                    </Link>
                    <Link to="/requests" className="btn-main">
                        Request Blood
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Home;
