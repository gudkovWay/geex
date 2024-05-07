import { ComponentProps } from "react";
import Icon from "../components/Icon";

const fileExtensionToIconMap = new Map<string, ComponentProps<typeof Icon>["name"]>([
  ['home', 'home'],
  ['user', 'user'],
  ['market', 'market'],
  ['ratings', 'ratings'],
  ['champ', 'champ'],
  ['organizations', 'organizations'],
  ['chevron', 'chevron'],
]);

export function checkExtenshion(fileName: string): ComponentProps<typeof Icon>["name"] {
  const fileExtension = fileName.split(".").pop() as string;
  return fileExtensionToIconMap.get(fileExtension) || "home";
}
