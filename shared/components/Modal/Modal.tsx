import { FC, PropsWithChildren } from "react";
import { View, Modal as RNModal, StyleSheet, Dimensions } from "react-native";

export interface ModalProps extends PropsWithChildren {
  isVisible: boolean;
  hideModal: () => void;
}
export const Modal: FC<ModalProps> = ({ isVisible, children, hideModal }) => {
  return (
    <RNModal
      animationType="fade"
      visible={isVisible}
      transparent={true}
      onRequestClose={hideModal}
    >
      <View style={styles.container}>{children}</View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, .5)",
    maxWidth: Dimensions.get("window").width,
    maxHeight: Dimensions.get("window").height,
  },
});
