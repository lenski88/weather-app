import styled from "styled-components";
import { ICON_CLASSES } from "./types/types";
import { COLORS } from "../../constants/constants";

export const IconStyle = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  & > ${`.${ICON_CLASSES.BIG_DARK}`} {
    width: 50px;
    height: 50px;
    & circle {
      fill: ${COLORS.backgroundBody};
      stroke: ${COLORS.borderColor};
    }

    & rect {
      fill: ${COLORS.backgroundBody};
      stroke: ${COLORS.borderColor};
    }
  }

  & > ${`.${ICON_CLASSES.SMALL_DARK}`} {
    width: 25px;
    height: 25px;
    & circle {
      fill: ${COLORS.backgroundBody};
      stroke: ${COLORS.borderColor};
    }

    & rect {
      fill: ${COLORS.backgroundBody};
      stroke: ${COLORS.borderColor};
    }
  }

  & > ${`.${ICON_CLASSES.BIG_LIGHT}`} {
    width: 50px;
    height: 50px;
    & circle {
      fill: ${COLORS.backgroundCard};
      stroke: ${COLORS.borderLightColor};
    }

    & rect {
      fill: ${COLORS.backgroundCard};
      stroke: ${COLORS.borderLightColor};
    }
  }

  & > ${`.${ICON_CLASSES.SMALL_LIGHT}`} {
    width: 25px;
    height: 25px;
    & circle {
      fill: ${COLORS.backgroundCard};
      stroke: ${COLORS.borderLightColor};
    }

    & rect {
      fill: ${COLORS.backgroundCard};
      stroke: ${COLORS.borderLightColor};
    }
  }
`;
