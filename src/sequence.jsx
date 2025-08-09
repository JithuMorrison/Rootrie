import React, { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import { ArrowLeft, Plus, GitMerge, Trash2, Copy, Download, Image, Upload, Save } from 'lucide-react';

const SequenceDiagramMaker = ({ 
  sequenceDiagram, 
  participants = [], 
  messages = [],
  onUpdateSequenceDiagram,
  onBack 
}) => {
  const [newParticipant, setNewParticipant] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [fromParticipant, setFromParticipant] = useState('');
  const [toParticipant, setToParticipant] = useState('');
  const [messageType, setMessageType] = useState('sync');
  const [activeTab, setActiveTab] = useState('editor');
  const [jsonInput, setJsonInput] = useState('');
  const [dragItem, setDragItem] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  // Initialize JSON input with current diagram data
  useEffect(() => {
    setJsonInput(JSON.stringify({ participants, messages }, null, 2));
  }, [participants, messages]);

  const addParticipant = () => {
    if (!newParticipant.trim()) return;
    
    const updatedParticipants = [
      ...participants,
      {
        id: Date.now(),
        name: newParticipant,
        x: 50 + participants.length * 150,
        y: 50
      }
    ];
    
    onUpdateSequenceDiagram({
      ...sequenceDiagram,
      participants: updatedParticipants
    });
    
    setNewParticipant('');
  };

  const addMessage = () => {
    if (!newMessage.trim() || !fromParticipant || !toParticipant) return;
    
    const from = participants.find(p => p.id === parseInt(fromParticipant));
    const to = participants.find(p => p.id === parseInt(toParticipant));
    
    if (!from || !to) return;
    
    const updatedMessages = [
      ...messages,
      {
        id: Date.now(),
        text: newMessage,
        from: from.id,
        to: to.id,
        type: messageType,
        order: messages.length + 1
      }
    ];
    
    onUpdateSequenceDiagram({
      ...sequenceDiagram,
      messages: updatedMessages
    });
    
    setNewMessage('');
    setFromParticipant('');
    setToParticipant('');
  };

  const deleteParticipant = (participantId) => {
    const updatedParticipants = participants.filter(p => p.id !== participantId);
    const updatedMessages = messages.filter(
      msg => !(msg.from === participantId || msg.to === participantId)
    );
    
    // Reorder remaining messages
    const reorderedMessages = updatedMessages.map((msg, index) => ({
      ...msg,
      order: index + 1
    }));
    
    onUpdateSequenceDiagram({
      ...sequenceDiagram,
      participants: updatedParticipants,
      messages: reorderedMessages
    });
  };

  const deleteMessage = (messageId) => {
    const updatedMessages = messages.filter(msg => msg.id !== messageId);
    
    // Reorder remaining messages
    const reorderedMessages = updatedMessages.map((msg, index) => ({
      ...msg,
      order: index + 1
    }));
    
    onUpdateSequenceDiagram({
      ...sequenceDiagram,
      messages: reorderedMessages
    });
  };

  const moveMessageUp = (messageId) => {
    const messageIndex = messages.findIndex(msg => msg.id === messageId);
    if (messageIndex <= 0) return;
    
    const newMessages = [...messages];
    [newMessages[messageIndex - 1], newMessages[messageIndex]] = 
      [newMessages[messageIndex], newMessages[messageIndex - 1]];
    
    // Update orders
    newMessages.forEach((msg, index) => {
      msg.order = index + 1;
    });
    
    onUpdateSequenceDiagram({
      ...sequenceDiagram,
      messages: newMessages
    });
  };

  const moveMessageDown = (messageId) => {
    const messageIndex = messages.findIndex(msg => msg.id === messageId);
    if (messageIndex >= messages.length - 1) return;
    
    const newMessages = [...messages];
    [newMessages[messageIndex], newMessages[messageIndex + 1]] = 
      [newMessages[messageIndex + 1], newMessages[messageIndex]];
    
    // Update orders
    newMessages.forEach((msg, index) => {
      msg.order = index + 1;
    });
    
    onUpdateSequenceDiagram({
      ...sequenceDiagram,
      messages: newMessages
    });
  };

  const handleMouseDown = (e, participant) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setDragItem(participant);
    setDragOffset({
      x: x - participant.x,
      y: y - participant.y
    });
  };

  const handleMouseMove = (e) => {
    if (!dragItem) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - dragOffset.x;
    const y = e.clientY - rect.top - dragOffset.y;
    
    const updatedParticipants = participants.map(p => 
      p.id === dragItem.id ? { ...p, x, y } : p
    );
    
    onUpdateSequenceDiagram({
      ...sequenceDiagram,
      participants: updatedParticipants
    });
  };

  const handleMouseUp = () => {
    setDragItem(null);
  };

  useEffect(() => {
    if (dragItem) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [dragItem, handleMouseMove]);

  const exportToJson = () => {
    const data = { participants, messages };
    return JSON.stringify(data, null, 2);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(exportToJson());
  };

  const importFromJson = () => {
    try {
      const data = JSON.parse(jsonInput);
      if (Array.isArray(data.participants) && Array.isArray(data.messages)) {
        onUpdateSequenceDiagram({
          ...sequenceDiagram,
          participants: data.participants,
          messages: data.messages
        });
      } else {
        alert('Invalid JSON format. Expected participants and messages arrays.');
      }
    } catch (error) {
      alert('Error parsing JSON: ' + error.message);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      setJsonInput(event.target.result);
    };
    reader.readAsText(file);
  };

  const exportToImage = () => {
    if (!canvasRef.current) return;
    
    html2canvas(canvasRef.current, {
      backgroundColor: '#f8fafc',
      scale: 2
    }).then(canvas => {
      const link = document.createElement('a');
      link.download = `${sequenceDiagram.name || 'sequence-diagram'}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  };

  const renderParticipant = (participant) => {
    return (
      <div 
        key={participant.id}
        className="participant"
        style={{
          left: `${participant.x}px`,
          top: `${participant.y}px`,
          cursor: dragItem?.id === participant.id ? 'grabbing' : 'grab'
        }}
        onMouseDown={(e) => handleMouseDown(e, participant)}
      >
        <div className="participant-line"></div>
        <div className="participant-name">{participant.name}</div>
      </div>
    );
  };

  const renderMessage = (message, index) => {
    const fromParticipant = participants.find(p => p.id === message.from);
    const toParticipant = participants.find(p => p.id === message.to);
    
    if (!fromParticipant || !toParticipant) return null;
    
    const yPosition = 120 + index * 50;
    const fromX = fromParticipant.x + 25;
    const toX = toParticipant.x + 25;
    
    // Determine arrow direction and style based on message type
    let arrowStyle = {};
    let arrowPoints = '';
    let arrowDirection = fromX < toX ? 'right' : 'left';
    
    if (message.type === 'async') {
      arrowStyle = { strokeDasharray: '5,5', stroke: '#3b82f6' };
      arrowPoints = arrowDirection === 'right' ? 
        `${toX - 10},${yPosition - 5} ${toX},${yPosition} ${toX - 10},${yPosition + 5}` :
        `${toX + 10},${yPosition - 5} ${toX},${yPosition} ${toX + 10},${yPosition + 5}`;
    } else if (message.type === 'return') {
      arrowStyle = { stroke: '#10b981' };
      arrowPoints = arrowDirection === 'right' ? 
        `${toX - 10},${yPosition - 5} ${toX},${yPosition} ${toX - 10},${yPosition + 5}` :
        `${toX + 10},${yPosition - 5} ${toX},${yPosition} ${toX + 10},${yPosition + 5}`;
    } else { // sync
      arrowStyle = { stroke: '#64748b' };
      arrowPoints = arrowDirection === 'right' ? 
        `${toX - 10},${yPosition - 5} ${toX},${yPosition} ${toX - 10},${yPosition + 5}` :
        `${toX + 10},${yPosition - 5} ${toX},${yPosition} ${toX + 10},${yPosition + 5}`;
    }
    
    return (
      <React.Fragment key={message.id}>
        <svg className="message">
          <line
            x1={fromX}
            y1={yPosition}
            x2={toX}
            y2={yPosition}
            strokeWidth="2"
            {...arrowStyle}
          />
          <polygon
            points={arrowPoints}
            fill={arrowStyle.stroke || '#64748b'}
          />
          <text
            x={(fromX + toX) / 2}
            y={yPosition - 10}
            textAnchor="middle"
            fontSize="12"
            fill={arrowStyle.stroke || '#64748b'}
          >
            {message.text}
          </text>
        </svg>
        
        {/* Activation bars */}
        {message.type === 'sync' && (
          <React.Fragment>
            <svg className="activation-bar">
              <rect
                x={fromX - 2}
                y={yPosition}
                width="6"
                height="40"
                fill="#cc841fff"
                opacity="0.5"
              />
              <rect
                x={toX - 2}
                y={yPosition}
                width="6"
                height="40"
                fill="#cc841fff"
                opacity="0.5"
              />
            </svg>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  };

  return (
    <div className="sequence-maker">
      <div className="toolbar">
        <button onClick={onBack} className="back-btn">
          <ArrowLeft size={16} /> Back
        </button>
        <h2>{sequenceDiagram.name}</h2>
        <div className="spacer"></div>
        <div className="export-buttons">
          <button onClick={exportToImage} className="export-btn">
            <Image size={16} /> Export Image
          </button>
          <button onClick={copyToClipboard} className="export-btn">
            <Copy size={16} /> Copy JSON
          </button>
          <button 
            onClick={() => {
              const blob = new Blob([exportToJson()], { type: 'application/json' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `${sequenceDiagram.name || 'sequence-diagram'}.json`;
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(url);
            }} 
            className="export-btn"
          >
            <Download size={16} /> Export JSON
          </button>
        </div>
      </div>

      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'editor' ? 'active' : ''}`}
          onClick={() => setActiveTab('editor')}
        >
          Diagram Editor
        </button>
        <button 
          className={`tab ${activeTab === 'json' ? 'active' : ''}`}
          onClick={() => setActiveTab('json')}
        >
          JSON Editor
        </button>
      </div>

      {activeTab === 'editor' ? (
        <div className="diagram-container">
          <div className="diagram-sidebar">
            <div className="sidebar-section">
              <h3>Participants</h3>
              <div className="form-group">
                <input
                  type="text"
                  value={newParticipant}
                  onChange={(e) => setNewParticipant(e.target.value)}
                  placeholder="New participant name"
                  onKeyPress={(e) => e.key === 'Enter' && addParticipant()}
                />
                <button onClick={addParticipant} className="add-btn">
                  <Plus size={16} /> Add Participant
                </button>
              </div>
              <div className="participant-list">
                {participants.map(participant => (
                  <div key={participant.id} className="list-item">
                    <div className="item-name">{participant.name}</div>
                    <button 
                      onClick={() => deleteParticipant(participant.id)}
                      className="delete-btn"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <h3>Messages</h3>
              <div className="form-group">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Message text"
                  onKeyPress={(e) => e.key === 'Enter' && addMessage()}
                />
              </div>
              <div className="form-group">
                <label>From</label>
                <select 
                  value={fromParticipant || ''}
                  onChange={(e) => setFromParticipant(e.target.value)}
                >
                  <option value="">Select participant</option>
                  {participants.map(participant => (
                    <option key={participant.id} value={participant.id}>{participant.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>To</label>
                <select 
                  value={toParticipant || ''}
                  onChange={(e) => setToParticipant(e.target.value)}
                >
                  <option value="">Select participant</option>
                  {participants.map(participant => (
                    <option key={participant.id} value={participant.id}>{participant.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Message Type</label>
                <select 
                  value={messageType}
                  onChange={(e) => setMessageType(e.target.value)}
                >
                  <option value="sync">Synchronous</option>
                  <option value="async">Asynchronous</option>
                  <option value="return">Return</option>
                </select>
              </div>
              <button 
                onClick={addMessage}
                disabled={!newMessage.trim() || !fromParticipant || !toParticipant}
                className="add-btn"
              >
                <GitMerge size={16} /> Add Message
              </button>
            </div>

            <div className="sidebar-section">
              <h3>Message Sequence</h3>
              <div className="message-list">
                {messages
                  .sort((a, b) => a.order - b.order)
                  .map(message => {
                    const from = participants.find(p => p.id === message.from);
                    const to = participants.find(p => p.id === message.to);
                    
                    if (!from || !to) return null;
                    
                    return (
                      <div key={message.id} className="message-item">
                        <div className="message-info">
                          <div className="message-order">{message.order}.</div>
                          <div className="message-text">
                            {from.name} → {to.name}: {message.text}
                          </div>
                          <div className="message-type">{message.type}</div>
                        </div>
                        <div className="message-actions">
                          <button 
                            onClick={() => moveMessageUp(message.id)}
                            disabled={message.order === 1}
                            className="move-btn"
                          >
                            ↑
                          </button>
                          <button 
                            onClick={() => moveMessageDown(message.id)}
                            disabled={message.order === messages.length}
                            className="move-btn"
                          >
                            ↓
                          </button>
                          <button 
                            onClick={() => deleteMessage(message.id)}
                            className="delete-btn"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          
          <div className="diagram-canvas" ref={canvasRef}>
            {messages
              .sort((a, b) => a.order - b.order)
              .map((message, index) => renderMessage(message, index))}
            {participants.map(renderParticipant)}
          </div>
        </div>
      ) : (
        <div className="json-editor">
          <div className="json-actions">
            <button 
              onClick={() => {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = '.json';
                input.onchange = handleFileUpload;
                input.click();
              }}
              className="import-btn"
            >
              <Upload size={16} /> Import JSON File
            </button>
          </div>
          <textarea
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            className="json-textarea"
          />
          <button 
            onClick={importFromJson}
            className="import-btn"
          >
            <Save size={16} /> Apply JSON
          </button>
        </div>
      )}

      <style jsx>{`
        .sequence-maker {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #f8fafc;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }
        
        .toolbar {
          display: flex;
          align-items: center;
          padding: 16px;
          background: white;
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .toolbar h2 {
          margin: 0 16px;
          font-size: 20px;
          color: #1e293b;
        }
        
        .spacer {
          flex: 1;
        }
        
        .export-buttons {
          display: flex;
          gap: 8px;
        }
        
        .back-btn, .export-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .back-btn {
          background: #f1f5f9;
          color: #64748b;
          border: 1px solid #e2e8f0;
        }
        
        .back-btn:hover {
          background: #e2e8f0;
        }
        
        .export-btn {
          background: #3b82f6;
          color: white;
          border: 1px solid #3b82f6;
        }
        
        .export-btn:hover {
          background: #2563eb;
        }
        
        .tabs {
          display: flex;
          border-bottom: 1px solid #e2e8f0;
          background: white;
        }
        
        .tab {
          padding: 12px 24px;
          border: none;
          background: none;
          cursor: pointer;
          font-weight: 500;
          color: #64748b;
          border-bottom: 2px solid transparent;
        }
        
        .tab.active {
          color: #3b82f6;
          border-bottom-color: #3b82f6;
        }
        
        .diagram-container {
          display: flex;
          flex: 1;
          overflow: hidden;
        }
        
        .diagram-sidebar {
          width: 300px;
          background: white;
          border-right: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          overflow: auto;
        }
        
        .sidebar-section {
          padding: 16px;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .sidebar-section h3 {
          margin-top: 0;
          margin-bottom: 12px;
          font-size: 16px;
          color: #1e293b;
        }
        
        .form-group {
          margin-bottom: 12px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 4px;
          font-size: 12px;
          font-weight: 500;
          color: #64748b;
        }
        
        .form-group input,
        .form-group select {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 14px;
        }
        
        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: #3b82f6;
        }
        
        .add-btn {
          width: 100%;
          padding: 8px 16px;
          background: #10b981;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 8px;
        }
        
        .add-btn:hover {
          background: #059669;
        }
        
        .add-btn:disabled {
          background: #d1fae5;
          cursor: not-allowed;
        }
        
        .participant-list,
        .message-list {
          max-height: 200px;
          overflow-y: auto;
          margin-top: 12px;
          color: #1e293b;
        }
        
        .list-item {
          display: flex;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .item-name {
          flex: 1;
          font-size: 14px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .delete-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fee2e2;
          color: #ef4444;
          border: none;
          cursor: pointer;
        }
        
        .delete-btn:hover {
          background: #fecaca;
        }
        
        .diagram-canvas {
          flex: 1;
          background: #f8fafc;
          position: relative;
          overflow: auto;
        }
        
        .participant {
          position: absolute;
          width: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #1e293b;
        }
        
        .participant-line {
          width: 2px;
          height: 500px;
          background: #64748b;
        }
        
        .participant-name {
          margin-top: 4px;
          font-size: 12px;
          text-align: center;
          font-weight: 500;
          background: white;
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px solid #e2e8f0;
        }
        
        .message {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .activation-bar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .message-item {
          display: flex;
          flex-direction: column;
          padding: 8px 0;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .message-info {
          display: flex;
          align-items: center;
          margin-bottom: 4px;
        }
        
        .message-order {
          font-weight: bold;
          margin-right: 8px;
          font-size: 12px;
          color: #64748b;
        }
        
        .message-text {
          flex: 1;
          font-size: 12px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .message-type {
          font-size: 10px;
          background: #e2e8f0;
          padding: 2px 4px;
          border-radius: 4px;
          margin-left: 8px;
          color: #475569;
        }
        
        .message-actions {
          display: flex;
          gap: 4px;
          justify-content: flex-end;
        }
        
        .move-btn {
          width: 24px;
          height: 24px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #e2e8f0;
          color: #475569;
          border: none;
          cursor: pointer;
          font-size: 10px;
          padding: 0;
        }
        
        .move-btn:hover {
          background: #cbd5e1;
        }
        
        .move-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .json-editor {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 16px;
          background: white;
        }
        
        .json-actions {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
        }
        
        .import-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          border: none;
          background: #10b981;
          color: white;
        }
        
        .import-btn:hover {
          background: #059669;
        }
        
        .json-textarea {
          flex: 1;
          padding: 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-family: monospace;
          font-size: 14px;
          resize: none;
          margin-bottom: 12px;
        }
      `}</style>
    </div>
  );
};

export default SequenceDiagramMaker;