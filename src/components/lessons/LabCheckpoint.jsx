import { useState } from 'react';
import '../../pages/lab-questions.css';

const KIND_LABELS = { doc: 'Sau phần Doc', practice: 'Sau phần Thực hành' };
const QUESTION_TYPE_LABELS = {
  single_choice: 'Trắc nghiệm 1 đáp án',
  multiple_choice: 'Trắc nghiệm nhiều đáp án',
  true_false: 'Đúng / Sai',
  short_answer: 'Trả lời ngắn',
};

// Interactive choice selection for review. Official grading is handled on the server.
export function QuestionList({ questions }) {
  const [selectedChoices, setSelectedChoices] = useState({});

  if (!questions.length) return <p className="lab-questions-empty">Chưa có câu hỏi — giảng viên sẽ bổ sung.</p>;

  const selectChoice = (qId, choiceId) => {
    setSelectedChoices(prev => ({
      ...prev,
      [qId]: prev[qId] === choiceId ? null : choiceId,
    }));
  };

  const answeredCount = Object.values(selectedChoices).filter(Boolean).length;

  return <div className="lab-questions-interactive-wrap">
    <div className="lab-questions-interactive-meta" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', padding: '0.5rem 0.85rem', background: 'rgba(255,255,255,0.03)', borderRadius: '6px', fontSize: '0.85rem', color: 'var(--text-muted, #94a3b8)' }}>
      <span>Ôn tập tương tác ({questions.length} câu hỏi)</span>
      <span style={{ color: answeredCount > 0 ? '#38bdf8' : 'inherit', fontWeight: 500 }}>Đã chọn: {answeredCount}/{questions.length}</span>
    </div>
    <ol className="lab-questions-items">
      {questions.map((question, qIdx) => {
        const activeChoice = selectedChoices[question.id];
        return <li key={question.id} style={{ marginBottom: '1.25rem', padding: '0.85rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="lab-questions-prompt" style={{ fontWeight: 600, fontSize: '0.96rem', marginBottom: '0.4rem', color: 'var(--text-primary, #f1f5f9)' }}>
            {qIdx + 1}. {question.prompt}
          </p>
          <small style={{ color: '#0ea5e9', display: 'inline-block', marginBottom: '0.65rem' }}>
            {QUESTION_TYPE_LABELS[question.type] || question.type}
          </small>
          {question.choices?.length > 0 && <ul className="lab-questions-choices" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            {question.choices.map(choice => {
              const isSelected = activeChoice === choice.id;
              return <li key={choice.id}>
                <button
                  type="button"
                  className={`lab-choice-btn ${isSelected ? 'is-selected' : ''}`}
                  onClick={() => selectChoice(question.id, choice.id)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '0.55rem 0.85rem',
                    borderRadius: '6px',
                    border: isSelected ? '1px solid #38bdf8' : '1px solid rgba(255,255,255,0.1)',
                    background: isSelected ? 'rgba(14, 165, 233, 0.16)' : 'rgba(255,255,255,0.03)',
                    color: isSelected ? '#38bdf8' : 'var(--text-secondary, #cbd5e1)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.55rem',
                    transition: 'all 0.15s ease',
                    fontSize: '0.9rem',
                    lineHeight: '1.4'
                  }}
                >
                  <b style={{ minWidth: '1.3rem', color: isSelected ? '#38bdf8' : 'var(--text-muted, #94a3b8)' }}>{choice.id}.</b>
                  <span style={{ flex: 1 }}>{choice.text}</span>
                </button>
              </li>;
            })}
          </ul>}
        </li>;
      })}
    </ol>
  </div>;
}

/**
 * One "❓ Câu hỏi kiểm tra" block. `renderExercise` turns an exercise id into a link or button.
 * @param {{ checkpoint: any, index?: number, renderExercise: (id: string) => import('react').ReactNode, as?: 'li' | 'div' }} props
 */
export function CheckpointCard({ checkpoint, index, renderExercise, as = 'li' }) {
  /** @type {any} */
  const Tag = as;
  const headingId = `checkpoint-${checkpoint.id}`;
  return <Tag className="lab-questions-checkpoint">
    <header>
      <span className={`lab-questions-kind lab-questions-kind--${checkpoint.kind}`}>{KIND_LABELS[checkpoint.kind]}</span>
      <h2 id={headingId}>{index !== undefined && <span className="lab-questions-index">{index + 1}.</span>} {checkpoint.label}</h2>
    </header>
    <p className="lab-questions-topics"><strong>Nội dung kiểm tra:</strong> {checkpoint.topics}</p>
    {checkpoint.exercises.length > 0 && <div className="lab-questions-exercises">
      <span>Bài thực hành liên quan:</span>
      <ul>{checkpoint.exercises.map(id => <li key={id}>{renderExercise(id)}</li>)}</ul>
    </div>}
    <section aria-labelledby={headingId} className="lab-questions-body">
      <QuestionList questions={checkpoint.questions} />
    </section>
  </Tag>;
}
