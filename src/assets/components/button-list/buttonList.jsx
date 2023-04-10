import { motion } from "framer-motion"

function ButtonList(props) {
  return (
        <motion.li className='py-2 px-4 mx-.5' animate={{ y: 0, opacity: 1 }} initial={{ y: 100, opacity: 0 }}  whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}  whileTap={{ scale: 0.9 }}>
          {props.text}
        </motion.li>
    )
}

export default ButtonList