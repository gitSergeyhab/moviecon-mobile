import { TestType } from "@/type/game";
import { Dimensions } from "react-native";

interface TestStyle {
  question: {
    type: "image" | "text" | "all" | "none" | "smallText";
  };
  answer: {
    height: number;
    grid: "4*1" | "2*2";
    hasBgImage: boolean;
    hasTextBlock: boolean;
    hasImage: boolean;
  };
}

type GameUISettings = Record<TestType, TestStyle>;

export const gameUISettings: GameUISettings = {
  PersonByMovie: {
    question: {
      type: "all",
    },
    answer: {
      grid: "2*2",
      height: Dimensions.get("screen").height * 0.45,
      hasBgImage: false,
      hasTextBlock: true,
      hasImage: true,
    },
  },
  MovieByPerson: {
    question: {
      type: "all",
    },
    answer: {
      grid: "2*2",
      height: Dimensions.get("screen").height * 0.45,
      hasBgImage: false,
      hasTextBlock: true,
      hasImage: true,
    },
  },
  MovieByFrame: {
    question: {
      type: "image",
    },
    answer: {
      grid: "4*1",
      height: Dimensions.get("screen").height * 0.42,
      hasBgImage: false,
      hasImage: false,
      hasTextBlock: true,
    },
  },
  FrameByMovie: {
    question: {
      type: "smallText",
    },
    answer: {
      grid: "4*1",
      height: Dimensions.get("screen").height * 0.57,
      hasBgImage: true,
      hasImage: true,
      hasTextBlock: false,
    },
  },
  PersonByPhoto: {
    question: {
      type: "image",
    },
    answer: {
      grid: "4*1",
      height: Dimensions.get("screen").height * 0.4,
      hasBgImage: false,
      hasImage: false,
      hasTextBlock: true,
    },
  },
  PhotoByPerson: {
    question: {
      type: "smallText",
    },
    answer: {
      grid: "2*2",
      height: Dimensions.get("screen").height * 0.57,
      hasBgImage: false,
      hasImage: true,
      hasTextBlock: false,
    },
  },
  YearByMovie: {
    question: {
      type: "all",
    },
    answer: {
      grid: "4*1",
      height: Dimensions.get("screen").height * 0.4,
      hasBgImage: false,
      hasImage: false,
      hasTextBlock: true,
    },
  },
  MovieByYear: {
    question: {
      type: "smallText",
    },
    answer: {
      grid: "2*2",
      height: Dimensions.get("screen").height * 0.52,
      hasBgImage: false,
      hasImage: true,
      hasTextBlock: true,
    },
  },
  SloganByMovie: {
    question: {
      type: "all",
    },
    answer: {
      grid: "4*1",
      height: Dimensions.get("screen").height * 0.4,
      hasBgImage: false,
      hasImage: false,
      hasTextBlock: true,
    },
  },
  MovieBySlogan: {
    question: {
      type: "smallText",
    },
    answer: {
      grid: "2*2",
      height: Dimensions.get("screen").height * 0.55,
      hasBgImage: false,
      hasImage: true,
      hasTextBlock: true,
    },
  },
  MovieByBudget: {
    question: {
      type: "none",
    },
    answer: {
      grid: "2*2",
      height: Dimensions.get("screen").height * 0.6,
      hasBgImage: false,
      hasImage: true,
      hasTextBlock: true,
    },
  },
};
