import Image from "next/image";
const page = () => {
    const teachers = [
        {
            name: "Md. Rahim Uddin",
            position: "Senior Mathematics Teacher",
            img: "/teachers/teacher1.jpg",
            bio: "১০ বছরের অভিজ্ঞতা সম্পন্ন গণিত শিক্ষক।"
        },
        {
            name: "Farhana Akter",
            position: "English Language Teacher",
            img: "/teachers/teacher2.jpg",
            bio: "ইংরেজি ভাষা ও সাহিত্যে দক্ষ ও অভিজ্ঞ।"
        },
        {
            name: "Sabbir Hossain",
            position: "Science Instructor",
            img: "/teachers/teacher3.jpg",
            bio: "বিজ্ঞান শেখানোকে আরও সহজ ও মজাদার করে তোলেন।"
        },
        {
            name: "Nusrat Jahan",
            position: "Bangla Teacher",
            img: "/teachers/teacher4.jpg",
            bio: "বাংলা সাহিত্য ও ব্যাকরণ শেখাতে বিশেষ পারদর্শী।"
        },
    ];

    return (
        <div className="w-full min-h-screen bg-white text-gray-800">

            <div className="w-full py-14 bg-blue-600 text-center text-white">
                <h1 className="text-4xl font-bold">Our Teachers</h1>
                <p className="text-gray-100 mt-2">
                    Skilled, experienced and dedicated professionals
                </p>
            </div>
            {/* Teachers Grid */}
            <div className="max-w-6xl mx-auto px-5 py-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                {teachers.map((t, index) => (
                    <div key={index} className="bg-gray-100 rounded-xl p-4 shadow hover:shadow-lg duration-200">
                        <img
                            src={t.img}
                            alt={t.name}
                            className="w-full h-48 object-cover rounded-lg"
                        />
                        <h3 className="text-xl font-semibold mt-4">{t.name}</h3>
                        <p className="text-blue-600 font-medium">{t.position}</p>
                        <p className="text-gray-600 text-sm mt-2">{t.bio}</p>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default page;
