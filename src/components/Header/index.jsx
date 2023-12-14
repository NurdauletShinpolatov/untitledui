import { Flex, Button, HStack, VStack, Text } from "@chakra-ui/react";
import { phoneSVG, untitledUiSVG } from "../../assets/svg";

const colors = {
  txtColor: "#475467",
  btnGreen: "#1CA350",
};

const links = [
  "Компания",
  "Дятельность",
  "Карьера",
  "Карьера",
  "Устойчивое развитие",
  "Контакты",
];

export default function Header() {
  return (
    <Flex
      bg="#fff"
      padding="15px 7%"
      justifyContent="space-between"
      alignItems="center"
    >
      {untitledUiSVG}

      <HStack spacing="20px">
        {links.map((link, i) => (
          <Button
            key={i}
            color={colors.txtColor}
            variant="link"
            fontSize="14px"
          >
            {link}
          </Button>
        ))}
      </HStack>

      <HStack spacing="10px">
        {phoneSVG}
        <VStack spacing="5px">
          <Text color={colors.txtColor} fontWeight="600">
            {"+998 (99) 123 45 67"}
          </Text>
          <Text color={colors.txtColor} fontWeight="600">
            {"+998 (99) 123 45 67"}
          </Text>
        </VStack>
      </HStack>

      <HStack spacing="10px">
        <Button color={colors.txtColor} variant="ghost">
          Log in
        </Button>
        <Button colorScheme="whatsapp" variant="solid">
          Sign up
        </Button>
      </HStack>
    </Flex>
  );
}
