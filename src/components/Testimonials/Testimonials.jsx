import TestimonialLeft from "./TestimonialLeft";
import TestimonialRight from "./TestimonialRight";

const Testimonials = () => {
    return (
        <div className="mt-24 mb-5">
            <div className="container mx-auto mb-5">

                <div className="grid md:grid-cols-2 gap-5">
                    <TestimonialLeft />
                    <div>
                        <TestimonialRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;