import { useState } from 'react';
import {
	Form,
	FormGroup,
	Label,
	Input,
	Button,
	Row,
	Col,
	ListGroup,
	ListGroupItem,
	Card,
	CardTitle,
	CardText,
	CardLink,
	List,
	ListInlineItem
} from 'reactstrap';
import { info } from './info';
import { experience } from './experience';
import { education } from './education';
import { skills } from './skills';
import { award } from './award';
import BERT from '../BERT.gif';
import photoadjuster from '../photoadjuster.gif';

export function Resume() {
	return (
		<div>
			<h1 className="header">Experience</h1>
			<Row>
				<Col sm="4">
					<Card body>
						<CardTitle tag="h4">{experience[0].company}</CardTitle>
						<CardText tag="h5">
							{experience[0].position} | {experience[0].date} | {experience[0].location}
						</CardText>
						<CardText> {experience[0].description[0]}</CardText>
						<CardText> {experience[0].description[1]}</CardText>
						<CardText> {experience[0].description[2]}</CardText>
					</Card>
				</Col>
				<Col sm="4">
					<Card body>
						<CardTitle tag="h4">{experience[1].company}</CardTitle>
						<CardText tag="h5">
							{experience[1].position} | {experience[1].date} | {experience[1].location}
						</CardText>
						<CardText> {experience[1].description[1]}</CardText>
						<CardText> {experience[1].description[2]}</CardText>
						<img alt="Card" src={BERT} />
						<CardLink href="sageren.com/text-summarizer-and-paraphraser">Try me!</CardLink>
					</Card>
				</Col>
				<Col sm="4">
					<Card body>
						<CardTitle tag="h4">{experience[2].company}</CardTitle>
						<CardText tag="h5">
							{experience[2].position} | {experience[2].date} | {experience[2].location}
						</CardText>
						<CardText> {experience[2].description[1]}</CardText>
						<CardText> {experience[2].description[2]}</CardText>
						<img alt="Card" src={photoadjuster} />
						<CardLink href="sageren.com/photo-adjuster">Try me!</CardLink>
					</Card>
				</Col>
			</Row>
			<h1 className="header">Education</h1>
			<Row>
				<Col sm="12">
					<Card body>
						<CardTitle tag="h4">{education.school}</CardTitle>
						<CardText tag="h5">
							{education.degree} | {education.domain} | {education.time}
						</CardText>
					</Card>
				</Col>
			</Row>
			<h1 className="header">Skills</h1>
			<Row>
				<Col sm="6">
					<Card body>
						<CardTitle tag="h5">
							{skills.Engineering.map((skill) => {
								return skill + ' | ';
							})}
						</CardTitle>
					</Card>
				</Col>
				<Col sm="6">
					<Card body>
						<CardTitle tag="h5">
							{skills.Interpersonal.map((skill) => {
								return skill + ' | ';
							})}
						</CardTitle>
					</Card>
				</Col>
			</Row>
			<h1 className="header">Awards</h1>
			<Row>
				<Col sm="4">
					<Card body>
						<CardTitle tag="h4">{award[0].title}</CardTitle>
						<CardText tag="h5">
							{award[0].date} | {award[0].company}
						</CardText>
						<CardText> {award[0].description}</CardText>
					</Card>
				</Col>
				<Col sm="4">
					<Card body>
						<CardTitle tag="h4">{award[1].title}</CardTitle>
						<CardText tag="h5">
							{award[1].date} | {award[1].company}
						</CardText>
						<CardText> {award[1].description}</CardText>
					</Card>
				</Col>
				<Col sm="4">
					<Card body>
						<CardTitle tag="h4">{award[2].title}</CardTitle>
						<CardText tag="h5">
							{award[2].date} | {award[2].company}
						</CardText>
						<CardText> {award[2].description}</CardText>
					</Card>
				</Col>
			</Row>
			<div>
				<h7 className="footer">Made with React.js @2022</h7>
			</div>
		</div>
	);
}
