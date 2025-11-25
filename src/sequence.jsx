import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Plus, GitMerge, Trash2, Copy, Download, Image, Upload, Save, User, Minus, MoreHorizontal } from 'lucide-react';

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
  const [participantType, setParticipantType] = useState('actor');
  const [activeTab, setActiveTab] = useState('editor');
  const [jsonInput, setJsonInput] = useState('');
  const [zoom, setZoom] = useState(1);
  const [spacing, setSpacing] = useState(150);
  const canvasRef = useRef(null);

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
        type: participantType
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
        order: messages.length + 1,
        activationStart: messageType === 'sync' || messageType === 'create' || messageType === 'self',
        activationEnd: false
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
    
    newMessages.forEach((msg, index) => {
      msg.order = index + 1;
    });
    
    onUpdateSequenceDiagram({
      ...sequenceDiagram,
      messages: newMessages
    });
  };

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
    
    const originalTransform = canvasRef.current.style.transform;
    canvasRef.current.style.transform = 'scale(1) translate(0px, 0px)';
    
    const tempCanvas = document.createElement('canvas');
    const rect = canvasRef.current.getBoundingClientRect();
    tempCanvas.width = rect.width * 2;
    tempCanvas.height = rect.height * 2;
    
    import('html2canvas').then(html2canvas => {
      html2canvas.default(canvasRef.current, {
        backgroundColor: '#ffffff',
        scale: 2,
        useCORS: true,
        logging: true,
        allowTaint: true
      }).then(canvas => {
        const link = document.createElement('a');
        link.download = `${sequenceDiagram.name || 'sequence-diagram'}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        
        canvasRef.current.style.transform = originalTransform;
      }).catch(err => {
        console.error('Error generating image:', err);
        canvasRef.current.style.transform = originalTransform;
      });
    });
  };

  const calculateParticipantX = (index) => {
    return 60 + index * spacing;
  };

  const renderParticipantHeader = (participant, index) => {
    const x = calculateParticipantX(index);
    const headerHeight = 60;
    
    return (
      <div
        key={`header-${participant.id}`}
        className="participant-header"
        style={{
          left: `${x - 60}px`,
          top: '40px',
          width: '120px',
          height: `${headerHeight}px`
        }}
      >
        {participant.type === 'actor' ? (
          <div className="participant-actor">
            <div className="actor-circle">
              <User size={16} />
            </div>
            <div className="actor-name">{participant.name}</div>
          </div>
        ) : (
          <div className={`participant-box ${participant.type || 'service'}`}>
            <span className="participant-name">{participant.name}</span>
          </div>
        )}
      </div>
    );
  };

  const renderLifeline = (participant, index) => {
    const x = calculateParticipantX(index);
    const startY = 110;
    const endY = Math.max(220 + messages.length * 50, 420);
    
    return (
      <div
        key={`lifeline-${participant.id}`}
        className="lifeline"
        style={{
          left: `${x - 1}px`,
          top: `${startY}px`,
          width: '2px',
          height: `${endY - startY}px`
        }}
      />
    );
  };

  const getActivationBoxes = (participantId, participantIndex) => {
    const x = calculateParticipantX(participantIndex);
    const boxes = [];
    const activationStack = [];
    
    messages
      .sort((a, b) => a.order - b.order)
      .forEach((message, index) => {
        const y = 150 + index * 50;
        
        // Start activation when receiving a sync/create message or making a self call
        if ((message.to === participantId && (message.type === 'sync' || message.type === 'create')) ||
            (message.from === participantId && message.to === participantId && message.type === 'self')) {
          activationStack.push({ start: y, messageId: message.id });
        }
        
        // End activation on return message from this participant
        if (message.from === participantId && message.type === 'return') {
          const activation = activationStack.pop();
          if (activation) {
            boxes.push({
              ...activation,
              end: y + 20,
              height: (y + 20) - activation.start
            });
          }
        }
      });
    
    // Handle any remaining activations (extend to end)
    if (activationStack.length > 0) {
      const lastY = 150 + messages.length * 50;
      activationStack.forEach(activation => {
        boxes.push({
          ...activation,
          end: lastY,
          height: lastY - activation.start
        });
      });
    }
    
    return boxes.map((box, index) => (
      <div
        key={`activation-${participantId}-${index}`}
        className="activation-box"
        style={{
          left: `${x - 8}px`,
          top: `${box.start}px`,
          width: '16px',
          height: `${box.height - 23}px`
        }}
      />
    ));
  };

  const renderMessage = (message, index) => {
    const fromIndex = participants.findIndex(p => p.id === message.from);
    const toIndex = participants.findIndex(p => p.id === message.to);
    
    if (fromIndex === -1 || toIndex === -1) return null;
    
    const y = 150 + index * 50;
    const fromX = calculateParticipantX(fromIndex);
    const toX = calculateParticipantX(toIndex);
    const isSelfCall = message.from === message.to;
    
    const getMessageStyle = (type) => {
      switch (type) {
        case 'async':
          return { 
            stroke: '#3b82f6', 
            strokeDasharray: '5,5',
            arrowType: 'open'
          };
        case 'return':
          return { 
            stroke: '#10b981', 
            strokeDasharray: '8,4',
            arrowType: 'open'
          };
        case 'create':
          return { 
            stroke: '#f59e0b', 
            strokeDasharray: 'none',
            arrowType: 'filled'
          };
        case 'destroy':
          return { 
            stroke: '#ef4444', 
            strokeDasharray: 'none',
            arrowType: 'filled'
          };
        case 'self':
          return { 
            stroke: '#8b5cf6', 
            strokeDasharray: 'none',
            arrowType: 'filled'
          };
        default: // sync
          return { 
            stroke: '#64748b', 
            strokeDasharray: 'none',
            arrowType: 'filled'
          };
      }
    };

    const style = getMessageStyle(message.type);
    
    if (isSelfCall) {
      const selfCallWidth = Math.max(40, spacing * 0.3);
      return (
        <div key={message.id} className="message-container">
          <svg className="message-svg" style={{ overflow: 'visible' }}>
            <path
              d={`M ${fromX} ${y} L ${fromX + selfCallWidth} ${y} L ${fromX + selfCallWidth} ${y + 20} L ${fromX} ${y + 20}`}
              fill="none"
              stroke={style.stroke}
              strokeWidth="2"
              strokeDasharray={style.strokeDasharray}
            />
            <polygon
              points={`${fromX - 8},${y + 10} ${fromX},${y + 20} ${fromX - 8},${y + 30}`}
              fill={style.stroke}
            />
            <rect
              x={fromX + selfCallWidth + 5}
              y={y - 8}
              width={message.text.length * 6 + 10}
              height="16"
              fill="white"
              stroke="#e2e8f0"
              strokeWidth="1"
              rx="3"
            />
            <text
              x={fromX + selfCallWidth + 10}
              y={y + 5}
              fontSize="12"
              fill={style.stroke}
              className="message-text"
            >
              {message.text}
            </text>
          </svg>
        </div>
      );
    }

    const direction = fromX < toX ? 1 : -1;
    const arrowX = direction > 0 ? toX - 8 : toX + 8;
    const midX = (fromX + toX) / 2;
    const textWidth = message.text.length * 6 + 10;
    
    return (
      <div key={message.id} className="message-container">
        <svg className="message-svg" style={{ overflow: 'visible' }}>
          <line
            x1={fromX}
            y1={y}
            x2={toX}
            y2={y}
            stroke={style.stroke}
            strokeWidth="2"
            strokeDasharray={style.strokeDasharray}
          />
          
          {style.arrowType === 'filled' ? (
            <polygon
              points={direction > 0 ? 
                `${arrowX},${y - 6} ${toX},${y} ${arrowX},${y + 6}` :
                `${arrowX},${y - 6} ${toX},${y} ${arrowX},${y + 6}`
              }
              fill={style.stroke}
            />
          ) : (
            <path
              d={direction > 0 ? 
                `M ${arrowX},${y - 6} L ${toX},${y} L ${arrowX},${y + 6}` :
                `M ${arrowX},${y - 6} L ${toX},${y} L ${arrowX},${y + 6}`
              }
              fill="none"
              stroke={style.stroke}
              strokeWidth="2"
            />
          )}
          
          {/* Background for message text */}
          <rect
            x={midX - textWidth / 2}
            y={y - 20}
            width={textWidth}
            height="16"
            fill="white"
            stroke="#e2e8f0"
            strokeWidth="1"
            rx="3"
          />
          
          <text
            x={midX}
            y={y - 8}
            textAnchor="middle"
            fontSize="12"
            fill={style.stroke}
            className="message-text"
          >
            {message.text}
          </text>
          
          <text
            x={fromX + (direction > 0 ? -15 : 15)}
            y={y - 8}
            textAnchor="middle"
            fontSize="10"
            fill="#64748b"
            className="message-order"
          >
            {message.order}
          </text>
        </svg>
      </div>
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
        
        <div className="spacing-controls">
          <label>Spacing:</label>
          <button 
            onClick={() => setSpacing(Math.max(100, spacing - 25))}
            disabled={spacing <= 100}
            className="spacing-btn"
          >
            <Minus size={14} />
          </button>
          <span className="spacing-value">{spacing}px</span>
          <button 
            onClick={() => setSpacing(Math.min(300, spacing + 25))}
            disabled={spacing >= 300}
            className="spacing-btn"
          >
            <Plus size={14} />
          </button>
        </div>
        
        <div className="zoom-controls">
          <button 
            onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}
            disabled={zoom <= 0.5}
            className="zoom-btn"
          >
            -
          </button>
          <span className="zoom-level">{Math.round(zoom * 100)}%</span>
          <button 
            onClick={() => setZoom(Math.min(2, zoom + 0.1))}
            disabled={zoom >= 2}
            className="zoom-btn"
          >
            +
          </button>
        </div>
        
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
              </div>
              <div className="form-group">
                <label>Type</label>
                <select 
                  value={participantType}
                  onChange={(e) => setParticipantType(e.target.value)}
                >
                  <option value="actor">Actor (User)</option>
                  <option value="service">Service</option>
                  <option value="database">Database</option>
                  <option value="external">External System</option>
                </select>
              </div>
              <button onClick={addParticipant} className="add-btn">
                <Plus size={16} /> Add Participant
              </button>
              <div className="participant-list">
                {participants.map(participant => (
                  <div key={participant.id} className="list-item">
                    <div className="item-info">
                      <div className="item-name">{participant.name}</div>
                      <div className="item-type">{participant.type}</div>
                    </div>
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
                  <option value="sync">Synchronous Call</option>
                  <option value="async">Asynchronous Call</option>
                  <option value="return">Return Message</option>
                  <option value="create">Create Message</option>
                  <option value="destroy">Destroy Message</option>
                  <option value="self">Self Call</option>
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
                          <div className={`message-type ${message.type}`}>{message.type}</div>
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
          
          <div className="diagram-canvas-wrapper">
            <div 
              className="diagram-canvas" 
              ref={canvasRef}
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: 'top left'
              }}
            >
              {participants.map((participant, index) => renderParticipantHeader(participant, index))}
              {participants.map((participant, index) => renderLifeline(participant, index))}
              {participants.map((participant, index) => getActivationBoxes(participant.id, index))}
              {messages
                .sort((a, b) => a.order - b.order)
                .map((message, index) => renderMessage(message, index))}
            </div>
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
          padding: 12px 16px;
          background: white;
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          gap: 12px;
        }
        
        .toolbar h2 {
          margin: 0 16px;
          font-size: 18px;
          color: #1e293b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 200px;
        }
        
        .spacer {
          flex: 1;
        }
        
        .spacing-controls {
          display: flex;
          align-items: center;
          background: #f1f5f9;
          border-radius: 6px;
          padding: 2px;
          gap: 4px;
        }
        
        .spacing-controls label {
          font-size: 12px;
          font-weight: 500;
          color: #475569;
          padding: 0 8px;
        }
        
        .spacing-btn {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: white;
          border-radius: 4px;
          cursor: pointer;
          color: #475569;
          transition: all 0.2s;
        }
        
        .spacing-btn:hover:not(:disabled) {
          background: #e2e8f0;
        }
        
        .spacing-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .spacing-value {
          font-size: 11px;
          font-weight: 500;
          padding: 0 4px;
          color: #475569;
          min-width: 40px;
          text-align: center;
        }
        
        .zoom-controls {
          display: flex;
          align-items: center;
          background: #f1f5f9;
          border-radius: 6px;
          padding: 2px;
        }
        
        .zoom-btn {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: none;
          cursor: pointer;
          font-weight: 600;
          color: #475569;
        }
        
        .zoom-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .zoom-level {
          font-size: 12px;
          font-weight: 500;
          padding: 0 8px;
          color: #475569;
        }
        
        .export-buttons {
          display: flex;
          gap: 8px;
        }
        
        .back-btn, .export-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 14px;
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
          font-size: 14px;
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
          width: 320px;
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
          box-shadow: 0 0 0 1px #3b82f6;
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
          font-size: 14px;
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
        
        .item-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .item-name {
          font-size: 14px;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .item-type {
          font-size: 12px;
          color: #64748b;
          text-transform: capitalize;
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
        
        .diagram-canvas-wrapper {
          flex: 1;
          background: white;
          overflow: auto;
        }
        
        .diagram-canvas {
          position: relative;
          min-height: 600px;
          min-width: 800px;
          transform-origin: top left;
        }
        
        .participant-header {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .participant-actor {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        
        .actor-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #3b82f6;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .actor-name {
          font-size: 12px;
          font-weight: 600;
          color: #1e293b;
          text-align: center;
          max-width: 100px;
          word-wrap: break-word;
        }
        
        .participant-box {
          padding: 8px 16px;
          border: 2px solid #64748b;
          border-radius: 8px;
          background: white;
          text-align: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          max-width: 120px;
        }
        
        .participant-box.service {
          border-color: #10b981;
          background: #ecfdf5;
        }
        
        .participant-box.database {
          border-color: #f59e0b;
          background: #fffbeb;
        }
        
        .participant-box.external {
          border-color: #8b5cf6;
          background: #f3e8ff;
        }
        
        .participant-name {
          font-weight: 600;
          font-size: 12px;
          color: #1e293b;
          word-wrap: break-word;
          line-height: 1.2;
        }
        
        .lifeline {
          position: absolute;
          background: transparent;
          border-left: 2px dotted #94a3b8;
        }
        
        .activation-box {
          position: absolute;
          background: rgba(59, 130, 246, 0.2);
          border: 1px solid rgba(59, 130, 246, 0.5);
          border-radius: 2px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .message-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .message-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .message-text {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          font-weight: 500;
        }
        
        .message-order {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          font-weight: 600;
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
          padding: 2px 6px;
          border-radius: 4px;
          margin-left: 8px;
          font-weight: 500;
          text-transform: uppercase;
        }
        
        .message-type.sync {
          background: #e2e8f0;
          color: #475569;
        }
        
        .message-type.async {
          background: #dbeafe;
          color: #1e40af;
        }
        
        .message-type.return {
          background: #d1fae5;
          color: #065f46;
        }
        
        .message-type.create {
          background: #fef3c7;
          color: #92400e;
        }
        
        .message-type.destroy {
          background: #fecaca;
          color: #991b1b;
        }
        
        .message-type.self {
          background: #e9d5ff;
          color: #6b21a8;
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
          font-size: 14px;
        }
        
        .import-btn:hover {
          background: #059669;
        }
        
        .json-textarea {
          flex: 1;
          padding: 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 13px;
          resize: none;
          margin-bottom: 12px;
          line-height: 1.5;
        }
        
        .json-textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 1px #3b82f6;
        }
      `}</style>
    </div>
  );
};

export default SequenceDiagramMaker;