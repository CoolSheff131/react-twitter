import {  makeStyles,Theme } from '@material-ui/core'
import grey from '@material-ui/core/colors/grey'


export const useHomeStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        height: '100vh'
    },
    logo: {
        margin: '15px 0'
    },
    logoIcon: {
        fontSize: 36,
    },
    sideMenuList: {
        position: 'sticky',
        top: 0,
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 230,
    },
    sideMenuListItem: {
        '&:hover': {
            '& div': {
                backgroundColor: 'rgba(29,161,242,0.1 )',
                '& h6': {
                    color: theme.palette.primary.main
                },
                '& svg path': {
                    fill: theme.palette.primary.main
                },
            }
        },
        '& div': {
            display: 'inline-flex',
            alignItems: 'center',

            padding: '0 25px 0 20px',
            marginBottom: 15,
            borderRadius: 30,
            height: 50,
            cursor: 'pointer',
            transition: 'background-color 0.1s ease-in-out'
        }
    },
    sideMenuTweetButton: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(3)
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15,
    },
    sideMenuListItemIcon: {
        fontSize: 32,
    },
    tweet: {
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)'
        }
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: 0,
        borderBottom: 0,
    },
    tweetsHeader: {
        display: 'flex',
        alignItems: 'center',
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        padding: '10px 15px',
        '& h6': {
            fontWeight: 800,
        }
    },
    tweetsHeaderBackButton: {
        marginRight: 30
    },
    tweetAvatar: {
        width: theme.spacing(5),
        height: theme.spacing(5)
    },
    tweetFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        left: -13,
        width: 450,
    },
    tweetsUserName: {
        color: grey[500]
    },
    tweetsCentred: {
        marginTop: 40,
        textAlign: 'center'
    },
    tweetWrapper:{
        color: 'inherit',
        textDecoration: 'none',
    },
    rightSide: {
        paddingTop: 20,
        position: 'sticky',
        top: 0
    },
    rightSideBlock: {
        backgroundColor: '#f5f8fa',
        borderRadius: 15,
        marginTop: 20,
        '& .MuiList-root': {
            paddingTop: 0
        },
    },
    rightSideBlockHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        backgroundColor: 'transparent',
        padding: '13px 18px',
        '& b': {
            fontSize: 20,
            fontWeight: 800,

        },
    },
    rightSideBlockItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
            fontWeight: 700,
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 50,
        },
        '& .MuiListItemText-root': {
            margin: 0,
        },
        '&:hover': {
            backgroundColor: '#edf3f6',
        },
        '& a':{
            color: 'inherit',
            textDecoration: 'none',
        },
    },
    addForm: {
        padding: 20,
    },
    addFormBody: {
        display: 'flex',
        width: '100%',
    },
    addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addFormActions: {
        margintTop: 10,
        paddingLeft: 70,
    },
    addFormTextarea: {
        width: '100%',
        border: 0,
        fontSize: 20,
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none',
    },
    addFormBottomLine: {
        height: 12,
        backgroundColor: '#e6ecf0',
    },
    addFormCircleProgress: {
        position: 'relative',
        width: 20,
        margin: '0 20px',
        '& .MuiCircularProgress-root': {
            position: 'absolute'
        },
    },
    addFormBottomRight: {
        display: 'flex',
        alignItems: 'center',
    }
}))