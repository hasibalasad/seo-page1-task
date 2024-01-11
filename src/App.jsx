
import './App.css'

import CompletedSection from './components/CompletedSection'
import DoingSection from './components/DoingSection'
import IncompleteSection from './components/IncompleteSection'
import OverdueSection from './components/OverdueSection'
import TodoSection from './components/TodoSection'
import UnderReviewSection from './components/UnderReviewSection'

function App() {

    return (
        <div className='m-2 h-[93vh] flex box-border w-[2040px]'>
            <IncompleteSection />
            <TodoSection />
            <DoingSection />
            <UnderReviewSection />
            <CompletedSection />
            <OverdueSection />
        </div>
    )
}

export default App
