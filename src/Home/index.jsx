import styles from "./Home.module.scss"
import { Box, Button } from "@chakra-ui/react"

export default function Home() {
  return(
    <div className={styles.Home}>
      <Box as="section" className={styles.headerSection}>
        <Box>
          <h2 className={styles.title}>
            Enter Engineering — признанный EPC-подрядчик!
          </h2>
          <p className={styles.body1}>
            Enter Engineering - одна из крупнейших и динамично развивающихся компаний региона, созданная в 2012 году.
          </p>
          <p></p>
          <p className={styles.body2}>
            Сегодня компания уверенно укрепляет свои позиции на рынке нефтегазового, промышленного и гражданского строительства в Центральной Азии.
          </p>
          <Button bg="#1CA350">

          </Button>
        </Box>

      </Box>
    </div>
  )
}