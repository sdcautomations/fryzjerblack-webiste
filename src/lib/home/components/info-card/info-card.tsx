import classNames from "classnames";
import styles from "./info-card.module.scss";

import { Divider, Flex, Icon, Text } from "@/home/components";

export const InfoCard = ({
  infoData,
  className,
}: {
  infoData: { content: string; iconPath: string }[];
  className: string;
}) => {
  const infoClassNames = classNames(styles["info-card"], className);

  return (
    <Flex className={infoClassNames} gap="16px" justify="center" align="center">
      {infoData.map((info, i) => {
        return (
          <>
            <Flex
              className={styles["info-card__content"]}
              direction="row"
              gap="8px"
              key={info.content}
            >
              <Icon src={info.iconPath} />

              <Text size="20px">{info.content}</Text>
            </Flex>

            {i === 2 ? null : <Divider />}
          </>
        );
      })}
    </Flex>
  );
};
