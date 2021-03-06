import React from 'react';
import { Button } from 'reactstrap';
import QuestionCard from '../../components/Cards/QuestionCard';
import AnswerCard from '../../components/Cards/AnswerCard';
import questionData from '../../helpers/data/questionData';
import CreateFlashCard from '../../components/Forms/CreateFlashCard';

export default class FlashCard extends React.Component {
  state = {
    flashCards: [],
    currentCard: {},
    answer: false,
    form: false,
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    if (!this.state.answer) {
      questionData.getQuestions().then((res) => {
        this.setState({
          flashCards: res,
          currentCard: res[0],
        });
      });
    } else {
      const { flashCards } = this.state;
      const nextQuestion = flashCards.indexOf(this.state.currentCard) + 1;
      this.setState({
        answer: false,
        currentCard: flashCards[nextQuestion] || flashCards[0],
      });
    }
  }

  showAnswerToQuestion = (e) => {
    e.preventDefault();
    this.setState({
      answer: true,
    });
  }

  render() {
    const { answer, currentCard } = this.state;
    const showQuestion = () => <QuestionCard key={currentCard.firebaseKey} card={currentCard} showAnswer={this.showAnswerToQuestion} />;
    const showAnswer = () => <AnswerCard key={currentCard.firebaseKey} card={currentCard} showNextQuestion={this.loadData} />;
    const showCreateForm = () => <CreateFlashCard />;
    return (
        <div className="flash-card d-flex flex-wrap justify-content-center">
          <Button onClick={showCreateForm}>Create Flash Card</Button>
          {answer === false ? showQuestion() : showAnswer()}
      </div>
    );
  }
}
