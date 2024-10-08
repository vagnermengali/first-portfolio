import { motion } from "framer-motion";

import { transitionVariants } from "@/components/Animations/Transition";
import { StyledDarkDiv } from "./style";

const Transition = () => {

    return (
        <>
            <motion.div
            >
                <StyledDarkDiv variants={transitionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ delay: 0.1, duration: 0.1 }} />
            </motion.div>
        </>
    );
};

export default Transition;