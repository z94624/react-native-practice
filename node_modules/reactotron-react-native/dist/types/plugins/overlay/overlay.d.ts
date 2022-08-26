import { Component } from "react";
import { ImageResizeMode, FlexAlignType } from "react-native";
interface Props {
    emitter: any;
}
interface State {
    opacity: number;
    uri: string;
    justifyContent: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
    alignItems: FlexAlignType;
    width?: number;
    height?: number;
    growToWindow?: boolean;
    resizeMode?: ImageResizeMode;
    marginLeft?: number;
    marginRight?: number;
    marginTop?: number;
    marginBottom?: number;
}
/** An overlay for showing an image to help with layout.
 *
 * @class FullScreenOverlay
 * @extends {Component}
 */
declare class FullScreenOverlay extends Component<Props, State> {
    constructor(props: Props);
    createContainerStyle(): {
        opacity: number;
        width: number;
        height: number;
        justifyContent: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
        alignItems: FlexAlignType;
        backfaceVisibility?: "visible" | "hidden";
        backgroundColor?: import("react-native").ColorValue;
        borderBottomColor?: import("react-native").ColorValue;
        borderBottomEndRadius?: number;
        borderBottomLeftRadius?: number;
        borderBottomRightRadius?: number;
        borderBottomStartRadius?: number;
        borderBottomWidth?: number;
        borderColor?: import("react-native").ColorValue;
        borderEndColor?: import("react-native").ColorValue;
        borderLeftColor?: import("react-native").ColorValue;
        borderLeftWidth?: number;
        borderRadius?: number;
        borderRightColor?: import("react-native").ColorValue;
        borderRightWidth?: number;
        borderStartColor?: import("react-native").ColorValue;
        borderStyle?: "solid" | "dotted" | "dashed";
        borderTopColor?: import("react-native").ColorValue;
        borderTopEndRadius?: number;
        borderTopLeftRadius?: number;
        borderTopRightRadius?: number;
        borderTopStartRadius?: number;
        borderTopWidth?: number;
        borderWidth?: number;
        testID?: string;
        elevation?: number;
        alignContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "stretch";
        alignSelf?: FlexAlignType | "auto";
        aspectRatio?: number;
        borderEndWidth?: string | number;
        borderStartWidth?: string | number;
        bottom?: string | number;
        display?: "none" | "flex";
        end?: string | number;
        flex?: number;
        flexBasis?: string | number;
        flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
        flexGrow?: number;
        flexShrink?: number;
        flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
        left?: string | number;
        margin?: string | number;
        marginBottom?: string | number;
        marginEnd?: string | number;
        marginHorizontal?: string | number;
        marginLeft?: string | number;
        marginRight?: string | number;
        marginStart?: string | number;
        marginTop?: string | number;
        marginVertical?: string | number;
        maxHeight?: string | number;
        maxWidth?: string | number;
        minHeight?: string | number;
        minWidth?: string | number;
        overflow?: "visible" | "hidden" | "scroll";
        padding?: string | number;
        paddingBottom?: string | number;
        paddingEnd?: string | number;
        paddingHorizontal?: string | number;
        paddingLeft?: string | number;
        paddingRight?: string | number;
        paddingStart?: string | number;
        paddingTop?: string | number;
        paddingVertical?: string | number;
        position?: "absolute" | "relative";
        right?: string | number;
        start?: string | number;
        top?: string | number;
        zIndex?: number;
        direction?: "inherit" | "ltr" | "rtl";
        shadowColor?: import("react-native").ColorValue;
        shadowOffset?: {
            width: number;
            height: number;
        };
        shadowOpacity?: number;
        shadowRadius?: number;
        transform?: (import("react-native").PerpectiveTransform | import("react-native").RotateTransform | import("react-native").RotateXTransform | import("react-native").RotateYTransform | import("react-native").RotateZTransform | import("react-native").ScaleTransform | import("react-native").ScaleXTransform | import("react-native").ScaleYTransform | import("react-native").TranslateXTransform | import("react-native").TranslateYTransform | import("react-native").SkewXTransform | import("react-native").SkewYTransform | import("react-native").MatrixTransform)[];
        transformMatrix?: number[];
        rotation?: number;
        scaleX?: number;
        scaleY?: number;
        translateX?: number;
        translateY?: number;
    };
    /**
     * Draw.
     */
    render(): JSX.Element;
}
export default FullScreenOverlay;
