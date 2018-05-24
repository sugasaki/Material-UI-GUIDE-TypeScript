import { withStyles, WithStyles } from '@material-ui/core/styles';
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


interface IBook {
    category: "book";
    author: string;
}

interface IPainting {
    category: "painting";
    artist: string;
}


type Props = IBook | IPainting;

const DecoratedUnionProps = decorate<Props>( // <-- without the type argument, we'd get a compiler error!
    class extends React.Component<Props & WithStyles<'root'>> {
        public render() {
            const props = this.props;
            return (
                <Typography classes={props.classes}>
                    {props.category === "book" ? props.author : props.artist}
                </Typography>
            );
        }
    }
);

// エクスポート定義
export default DecoratedUnionProps;


