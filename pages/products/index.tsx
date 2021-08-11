import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MyCard from "../../components/Card";
import Link from "next/link";
import ButtonBase from "@material-ui/core/ButtonBase";
import { useRouter } from "next/router";
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		paper: {
			padding: theme.spacing(2),
			textAlign: "center",
			color: theme.palette.text.secondary,
		},
	})
);

export default function AutoGrid() {
	const router = useRouter();
	const classes = useStyles();
	const items = [1, 2, 3, 4, 5, 6];
	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				{items.map((item) => (
					<Grid item md={3} xs={3}>
						<ButtonBase
							onClick={(event) => {
								router.push(`/products/${item}`);
							}}
						>
							<MyCard key={item} title={`${item}`} />
						</ButtonBase>
					</Grid>
				))}
			</Grid>
		</div>
	);
}
