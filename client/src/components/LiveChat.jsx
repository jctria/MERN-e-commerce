import { useState } from 'react';

const LiveAssistance = () => {
    const [showForm, setShowForm] = useState(false);
    const [showFormContent, setShowFormContent] = useState(true);

    const toggleForm = () => {
        setShowForm(!showForm);
        setShowFormContent(true); 
    };    
    const toggleFormContent = () => setShowFormContent(!showFormContent);

    return (
        <div>
            {!showForm && ( 
                <button className="live-chat-btn" onClick={toggleForm}>
                    Live Assistance
                    <div className="message-box">There is an assistant<br/>available to aid you in<br/>your shopping<br/>experience</div>
                </button>
            )}
            {showForm && (
                <form className={`live-chat-form ${!showFormContent ? 'minimized' : ''}`}>
                    <div className="form-header" onClick={toggleFormContent}>
                        <p>INTRODUCE YOURSELF</p>
                        <button className="close-form-btn" onClick={toggleForm}>CLOSE</button>
                    </div>                
                    {showFormContent && (
                        <div className="form-content">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" id="name" name="name" />
                            </div>
                            <div className="form-group">
                                <label>Email (required)</label>
                                <input type="email" id="email" name="email" />
                            </div>
                            <div className="form-group">
                                <label>How can we help? (required)</label>
                                <textarea id="message" name="message" rows="10"></textarea>
                            </div>
                            <button type="submit" className="submit-form-btn">START CHATTING</button>
                        </div>
                    )}
                </form>
            )}
        </div>
    );
};

export default LiveAssistance;