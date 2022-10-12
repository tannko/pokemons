import Card from '@mui/material/Card';
import { CardContent, CardHeader, List, ListItem, ListItemText } from '@mui/material';

function PokemonInfo(props) {
    return (
        <Card sx={{ maxWidth: 200 }}>
            <CardHeader title={props.info.id + ' ' + props.info.name.english}
            subheader={props.info.type.toString()}
            />
            <CardContent>
                <List>
                    <ListItem>
                        <ListItemText primary={props.info.base.HP} secondary="HP"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={props.info.base.Attack} secondary="Attack"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={props.info.base.Defense} secondary="Defense"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={props.info.base.Speed} secondary="Speed"/>
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
}

export default PokemonInfo;