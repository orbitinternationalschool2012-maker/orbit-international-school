import Image from "next/image";
const page = () => {
    return (
        <div className="w-full bg-white text-black">

            {/* Hero Section */}
            <section className="w-full h-[40vh] md:h-[50vh] relative flex items-center justify-center">
                <Image
                    src="/about-banner.avif"
                    alt="About Banner"
                    fill
                    className="object-cover opacity-40"
                />
                <h1 className="text-4xl font-bold text-black">Admission Information</h1>
            </section>

            {/* Why Choose Us */}
            <div className="max-w-6xl mx-auto px-5 py-10">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Our School?</h2>
                <p className="text-gray-600 leading-relaxed">
                    আমাদের স্কুলে বিশ্বমানের কারিকুলাম, অভিজ্ঞ শিক্ষক, নিরাপদ ও আধুনিক পরিবেশে
                    শিক্ষার্থীরা দক্ষতা অর্জন করে ভবিষ্যতের জন্য প্রস্তুত হয়।
                </p>
            </div>

            {/* Admission Requirements */}
            <div className="max-w-6xl mx-auto px-5 py-10">
                <h2 className="text-2xl font-semibold mb-6">Admission Requirements</h2>

                <div className="grid md:grid-cols-2 gap-6">

                    <div className="bg-gray-100 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold mb-3">Required Documents</h3>
                        <ul className="list-disc pl-6 text-gray-700 space-y-1">
                            <li>Birth Certificate</li>
                            <li>Passport-size Photo</li>
                            <li>Previous School Report (if applicable)</li>
                            <li>Parents' NID Copy</li>
                        </ul>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold mb-3">Eligibility</h3>
                        <ul className="list-disc pl-6 text-gray-700 space-y-1">
                            <li>Age requirement must match the grade</li>
                            <li>Basic assessment test</li>
                            <li>Parent interview</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Admission Process */}
            <div className="max-w-6xl mx-auto px-5 py-10">
                <h2 className="text-2xl font-semibold mb-6">Admission Process</h2>

                <div className="space-y-4">
                    <div className="p-4 border rounded-xl">
                        <h4 className="font-semibold">Step 1: Online Form Submission</h4>
                        <p className="text-gray-600">ওয়েবসাইট থেকে ফরম পূরণ করুন।</p>
                    </div>

                    <div className="p-4 border rounded-xl">
                        <h4 className="font-semibold">Step 2: Assessment</h4>
                        <p className="text-gray-600">শিক্ষার্থীর যোগ্যতা যাচাই করা হবে।</p>
                    </div>

                    <div className="p-4 border rounded-xl">
                        <h4 className="font-semibold">Step 3: Final Interview</h4>
                        <p className="text-gray-600">অভিভাবক ও শিক্ষার্থীর সাক্ষাৎকার।</p>
                    </div>

                    <div className="p-4 border rounded-xl">
                        <h4 className="font-semibold">Step 4: Admission Confirmation</h4>
                        <p className="text-gray-600">সকল প্রক্রিয়া শেষ হলে ভর্তি নিশ্চিত করা হবে।</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
