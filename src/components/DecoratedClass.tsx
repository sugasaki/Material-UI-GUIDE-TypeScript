import { withStyles, WithStyles } from '@material-ui/core/styles';
import { TypographyProps } from '@material-ui/core/Typography';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';


// 最初にwithStylesを呼び出すデコレータ関数を作成
const decorate = withStyles(({ palette, spacing }) => ({
    root: {
        backgroundColor: palette.background.default,
        color: palette.primary.main,
        padding: spacing.unit,
    },
}));


// propsの為のインターフェースを作成
interface IProps {
    text: string;
    type: TypographyProps['variant'];
    color: TypographyProps['color'];
};


// クラスを定義します
const DecoratedClass = decorate(
    class extends React.Component<IProps & WithStyles<'root'>> {
        public render() {
            const { text, type, color, classes } = this.props
            return (
                <Typography variant={type} color={color} classes={classes}>
                    {text}
                </Typography>
            );
        }
    }
);

// エクスポート定義
export default DecoratedClass;
