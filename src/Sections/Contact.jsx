import Swal from 'sweetalert2';
import RevealOnScroll from '../UI/RevealOnScroll';

export const Contact = () => {

    function Submit(e) {
        e.preventDefault();

        const form = e.target;

        // Custom field validation
        const name = form.Name.value.trim();
        const mobile = form.Mobile.value.trim();
        const email = form.Email.value.trim();
        const subject = form.Subject.value.trim();
        const message = form.Message.value.trim();

        if (!name || !email || !subject || !message) {
            Swal.fire({
                icon: 'error',
                title: 'Missing details',
                text: 'Please fill in all required details!',
            });
            return;
        }

        const formData = new FormData(form);

        fetch("https://script.google.com/macros/s/AKfycbyKh0r3JrO27-_7MisSdCnU2a4jV6wbH9OOH5L2fTl4reGxPEgZRPW_ptJ37Ir2aEwF/exec", {
            method: "POST",
            body: formData,
        })
            .then((res) => res.text())
            .then((data) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent!',
                    text: 'Your message has been submitted successfully.',
                });
                form.reset();
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Submission Failed',
                    text: 'Please try again later.',
                });
                console.error(err);
            });
    }

    return (
        <section
            id="contact"
            className="min-h-screen font-mono flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl font-semibold mb-12 
                            bg-gradient-to-r from-teal-500 to-indigo-600
                            bg-clip-text text-transparent text-center"
                    >
                        Get in Touch
                    </h2>

                    <form
                        className="space-y-6"
                        noValidate
                        onSubmit={Submit}
                    >
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="Name"
                                placeholder="Your Name"
                                className="w-110 
                                           bg-white/10 border 
                                           border-white/10 
                                           rounded px-4 py-3 
                                           text-white transition 
                                           focus:outline-none 
                                           focus:border-blue-500 
                                           focus:bg-blue-500/5"
                            />
                        </div>
                        <div className="relative mb-4">
                            <input
                                type="tel"
                                id="mobile"
                                name="Mobile"
                                placeholder="Mobile Number"
                                pattern="[0-9]{10}"
                                maxLength={10}
                                className="w-110 
                                           bg-white/10 border 
                                           border-white/10 
                                           rounded px-4 py-3 
                                           text-white transition 
                                           focus:outline-none 
                                           focus:border-blue-500 
                                           focus:bg-blue-500/5"
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="Email"
                                placeholder="YourName@domain.com"
                                className="w-110 
                                           bg-white/10 border 
                                           border-white/10 
                                           rounded px-4 py-3 
                                           text-white transition 
                                           focus:outline-none 
                                           focus:border-blue-500 
                                           focus:bg-blue-500/5"
                            />
                        </div>
                        <div className="relative mb-4">
                            <input
                                type="text"
                                id="subject"
                                name="Subject"
                                placeholder="Subject"
                                className="w-110 
                                           bg-white/10 border 
                                           border-white/10 
                                           rounded px-4 py-3 
                                           text-white transition 
                                           focus:outline-none 
                                           focus:border-blue-500 
                                           focus:bg-blue-500/5"
                            />
                        </div>
                        <div className="relative">
                            <textarea
                                rows={4}
                                id="message"
                                name="Message"
                                placeholder="Type your message..."
                                className="w-110 
                                           bg-white/10 border 
                                           border-white/10 
                                           rounded px-4 py-3 
                                           text-white transition 
                                           focus:outline-none 
                                           focus:border-blue-500 
                                           focus:bg-blue-500/5"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full 
                                       bg-gradient-to-r 
                                       from-teal-500 
                                       to-indigo-600 
                                       text-white 
                                       font-semibold 
                                       py-3 rounded 
                                       hover:from-teal-600 
                                       hover:to-indigo-700 
                                       transition duration-300 
                                       cursor-pointer">
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};
