import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Iletisim = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormSubmitted(true);
    };

    return (
        <div className="p-6 max-w-4xl mx-auto mt-12 bg-white bg-opacity-80 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-6">İletişim</h1>

            <div className="space-y-6">
                <section>
                    <h2 className="text-2xl font-semibold">Bize Ulaşın</h2>
                    <p className="text-lg">
                        Herhangi bir sorunuz, öneriniz veya geri bildiriminiz varsa, lütfen aşağıdaki formu doldurarak bizimle iletişime geçin.
                        En kısa sürede size geri dönüş yapacağız.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">İletişim Formu</h2>
                    {formSubmitted ? (
                        <p className="text-green-500">Mesajınız başarıyla gönderildi!</p>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-lg font-medium">Adınız</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-lg font-medium">E-posta Adresiniz</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-lg font-medium">Mesajınız</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="4"
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
                            >
                                Gönder
                            </button>
                        </form>
                    )}
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">İletişim Bilgilerimiz</h2>
                    <ul className="list-disc pl-6 text-lg">
                        <li><strong>Telefon:</strong> +90 538 315 19 28</li>
                        <li><strong>E-posta:</strong> ibrahim.cbn2832@gmail.com</li>
                        <li><strong>Adres:</strong> Giresun, Türkiye</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">Sosyal Medya</h2>
                    <p className="text-lg mb-2">Bizi sosyal medya hesaplarımızdan da takip edebilirsiniz:</p>
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-2xl">
                        <a
                            href="https://www.facebook.com/profile.php?id=100009923315947"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                        >
                            <FaFacebook /> Facebook
                        </a>
                        <a
                            href="https://x.com/ibrahim_cbn28?s=11"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-black hover:text-gray-700"
                        >
                            <FaXTwitter /> X
                        </a>
                        <a
                            href="https://www.instagram.com/ibrahim.cbnnn?igsh=OTc2bmx0aWZxNG43&utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-pink-600 hover:text-pink-800"
                        >
                            <FaInstagram /> Instagram
                        </a>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Iletisim;
