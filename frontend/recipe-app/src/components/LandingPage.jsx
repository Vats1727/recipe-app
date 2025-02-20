import { motion } from "framer-motion";

const LandingPage = () => (
  <motion.div className="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    <h2>Welcome to Recipe Sharing App</h2>
    <p>Find and share amazing recipes based on your health and diet preferences.</p>
  </motion.div>
);

export default LandingPage;
