import { NextApiHandler } from 'next';
import pl from 'tau-prolog';

const service: NextApiHandler = async (req, res) => {
 const session = await pl.create();
 const goal: string = req.body;
 goal.replace(/(.)^(.)/, 'and($1,$2)');
 console.log(goal);

 session.consult('src/data/utils/test.pl');
 session.query(goal);
 session.answers(result => {
  console.log(session.format_answer(result));
  res.send(result);
 });
};

export default service;
