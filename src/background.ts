import OBR from "@owlbear-rodeo/sdk";
import { version } from "../package.json";
import { EXTENSION_NAME, CONTEXT_MENU_ID } from "./constants";

OBR.onReady(() => {
  console.log(`${EXTENSION_NAME} version ${version}`);
  
  OBR.contextMenu.create({
    id: CONTEXT_MENU_ID,
    icons: [
      {
        icon: "/src/assets/tileIcon.svg",
        label: "Tile",
        filter: {
          every: [
            { key: "type", value: "IMAGE" },
            { key: "layer", value: "CHARACTER" },
          ],
          permissions: ["UPDATE"],
        },
      },
    ],
    embed: {
      url: "/",
      height: 88,
    },
  });
});