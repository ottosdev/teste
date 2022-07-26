import { TextInputProps } from "react-native";
import React from "react";
import { Container, TypeProsps } from "./styles";

type Props = TextInputProps & {
  type?: TypeProsps;
};

export default function Input({ type = "primary", ...rest }: Props) {
  return <Container type={type} {...rest} />;
}
