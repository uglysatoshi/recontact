import { AnimatePresence, motion } from 'framer-motion'
import { IconButton } from '@chakra-ui/react'
import { SettingsIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

const SettingsButton = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/settings').then(r => 404);
    }

    return (
        <AnimatePresence mode='wait' initial={false}>
            <motion.div
                style={{ display: 'inline-block' }}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <IconButton
                    aria-label="Settings"
                    variant={"outline"}
                    icon={<SettingsIcon />}
                    onClick={handleClick}
                    ml={2}
                ></IconButton>
            </motion.div>
        </AnimatePresence>
    )
}

export default SettingsButton