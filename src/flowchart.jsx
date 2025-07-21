import React, { useState } from 'react';

const FlowchartMaker = ({ flowchart, nodes, edges, jsonInput, onJsonInputChange, onImportJson, onUpdateFlowchart, onBack }) => {
  const [activeTab, setActiveTab] = useState('editor');
  const [selectedTool, setSelectedTool] = useState(null);
  
  const handleExportJson = () => {
    const data = {
      nodes,
      edges
    };
    return JSON.stringify(data, null, 2);
  };

  const handleExportImage = () => {
    console.log("Exporting as image");
  };

  const handleCanvasClick = (e) => {
    if (!selectedTool) return;
    
    const canvas = e.currentTarget;
    const rect = canvas.getBoundingClientRect();
    
    // Calculate position relative to canvas
    const x = (e.clientX - rect.left - flowchart.pan.x) / flowchart.zoom;
    const y = (e.clientY - rect.top - flowchart.pan.y) / flowchart.zoom;
    
    const newNode = {
      id: Date.now(),
      type: selectedTool,
      x,
      y,
      width: 100,
      height: 60,
      text: `${selectedTool.charAt(0).toUpperCase() + selectedTool.slice(1)} Node`
    };
    
    onUpdateFlowchart({
      ...flowchart,
      nodes: [...nodes, newNode]
    });
  };

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      color: 'rgba(255, 255, 255, 0.87)'
    }}>
      {/* Header Section */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
        paddingBottom: '15px',
        borderBottom: '1px solid #444'
      }}>
        <h2 style={{ 
          margin: '0',
          fontSize: '1.8em',
          color: 'rgba(255, 255, 255, 0.87)'
        }}>
          {flowchart.name}
        </h2>
        <button 
          onClick={onBack}
          style={{
            padding: '8px 16px',
            backgroundColor: '#1a1a1a',
            color: 'rgba(255, 255, 255, 0.87)',
            border: '1px solid #646cff',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1em',
            transition: 'border-color 0.25s',
            fontWeight: '500'
          }}
        >
          Back to List
        </button>
      </div>
      
      {/* Tabs Navigation */}
      <div style={{
        display: 'flex',
        marginBottom: '20px',
        borderBottom: '1px solid #444'
      }}>
        <button 
          onClick={() => setActiveTab('editor')} 
          style={{
            padding: '10px 20px',
            border: 'none',
            backgroundColor: activeTab === 'editor' ? '#646cff' : '#1a1a1a',
            color: 'rgba(255, 255, 255, 0.87)',
            cursor: 'pointer',
            fontSize: '1em',
            marginRight: '5px',
            borderRadius: '8px 8px 0 0',
            fontWeight: '500',
            transition: 'background-color 0.25s'
          }}
        >
          Flowchart Editor
        </button>
        <button 
          onClick={() => setActiveTab('json')} 
          style={{
            padding: '10px 20px',
            border: 'none',
            backgroundColor: activeTab === 'json' ? '#646cff' : '#1a1a1a',
            color: 'rgba(255, 255, 255, 0.87)',
            cursor: 'pointer',
            fontSize: '1em',
            borderRadius: '8px 8px 0 0',
            fontWeight: '500',
            transition: 'background-color 0.25s'
          }}
        >
          JSON Editor
        </button>
      </div>
      
      {activeTab === 'editor' ? (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {/* Toolbar */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            padding: '15px',
            backgroundColor: '#1a1a1a',
            borderRadius: '8px',
            border: '1px solid #333'
          }}>
            <div style={{
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap'
            }}>
              <button 
                onClick={() => setSelectedTool('rectangle')}
                style={{
                  padding: '8px 16px',
                  backgroundColor: selectedTool === 'rectangle' ? '#646cff' : '#333',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'background-color 0.25s'
                }}
              >
                Add Rectangle
              </button>
              <button 
                onClick={() => setSelectedTool('diamond')}
                style={{
                  padding: '8px 16px',
                  backgroundColor: selectedTool === 'diamond' ? '#646cff' : '#333',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'background-color 0.25s'
                }}
              >
                Add Diamond
              </button>
              <button 
                onClick={() => setSelectedTool('circle')}
                style={{
                  padding: '8px 16px',
                  backgroundColor: selectedTool === 'circle' ? '#646cff' : '#333',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'background-color 0.25s'
                }}
              >
                Add Circle
              </button>
              <button 
                onClick={() => setSelectedTool('arrow')}
                style={{
                  padding: '8px 16px',
                  backgroundColor: selectedTool === 'arrow' ? '#646cff' : '#333',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'background-color 0.25s'
                }}
              >
                Add Arrow
              </button>
            </div>
            
            <div style={{
              display: 'flex',
              gap: '10px',
              marginLeft: 'auto'
            }}>
              <button 
                onClick={handleExportImage}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#ff9800',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'background-color 0.25s'
                }}
              >
                Export as Image
              </button>
              <button 
                onClick={() => navigator.clipboard.writeText(handleExportJson())}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#9c27b0',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'background-color 0.25s'
                }}
              >
                Copy JSON
              </button>
            </div>
          </div>
          
          {/* Flowchart Canvas */}
          <div 
            onClick={handleCanvasClick}
            style={{
              height: '600px',
              border: '2px dashed #646cff',
              borderRadius: '8px',
              backgroundColor: '#1a1a1a',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              overflow: 'hidden',
              cursor: selectedTool ? 'crosshair' : 'default'
            }}
          >
            {nodes.length === 0 && !selectedTool && (
              <p style={{ 
                color: '#666',
                fontStyle: 'italic'
              }}>
                Select a tool from the toolbar to start building your flowchart
              </p>
            )}
            
            {selectedTool && nodes.length === 0 && (
              <p style={{ 
                color: '#666',
                fontStyle: 'italic'
              }}>
                Click anywhere to place a {selectedTool}
              </p>
            )}
            
            {/* Render nodes */}
            <div style={{
              position: 'absolute',
              transform: `scale(${flowchart.zoom}) translate(${flowchart.pan.x}px, ${flowchart.pan.y}px)`,
              transformOrigin: '0 0',
              width: '100%',
              height: '100%'
            }}>
              {nodes.map(node => (
                <div 
                  key={node.id}
                  style={{
                    position: 'absolute',
                    left: `${node.x}px`,
                    top: `${node.y}px`,
                    width: `${node.width}px`,
                    height: `${node.height}px`,
                    backgroundColor: '#646cff',
                    borderRadius: node.type === 'circle' ? '50%' : node.type === 'diamond' ? '0' : '4px',
                    transform: node.type === 'diamond' ? 'rotate(45deg)' : 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    cursor: 'move',
                    fontSize: '12px',
                    textAlign: 'center',
                    wordBreak: 'break-word',
                    padding: '5px',
                    boxSizing: 'border-box'
                  }}
                >
                  {node.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px'
        }}>
          {/* JSON Input */}
          <div style={{
            border: '1px solid #444',
            borderRadius: '8px',
            padding: '15px',
            backgroundColor: '#1a1a1a'
          }}>
            <h3 style={{ 
              marginTop: '0',
              color: 'rgba(255, 255, 255, 0.87)'
            }}>
              Import JSON
            </h3>
            <textarea
              value={jsonInput}
              onChange={(e) => onJsonInputChange(e.target.value)}
              placeholder="Paste your flowchart JSON here"
              style={{
                width: '100%',
                minHeight: '300px',
                padding: '10px',
                border: '1px solid #444',
                borderRadius: '8px',
                fontFamily: 'monospace',
                marginBottom: '15px',
                backgroundColor: '#242424',
                color: 'rgba(255, 255, 255, 0.87)',
                resize: 'vertical'
              }}
            />
            <button 
              onClick={onImportJson}
              style={{
                padding: '10px 20px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                width: '100%',
                fontSize: '1em',
                fontWeight: '500',
                transition: 'background-color 0.25s'
              }}
            >
              Import JSON
            </button>
          </div>
          
          {/* JSON Output */}
          <div style={{
            border: '1px solid #444',
            borderRadius: '8px',
            padding: '15px',
            backgroundColor: '#1a1a1a'
          }}>
            <h3 style={{ 
              marginTop: '0',
              color: 'rgba(255, 255, 255, 0.87)'
            }}>
              Current Flowchart JSON
            </h3>
            <pre style={{
              backgroundColor: '#242424',
              padding: '15px',
              border: '1px solid #444',
              borderRadius: '8px',
              overflow: 'auto',
              maxHeight: '400px',
              fontFamily: 'monospace',
              color: 'rgba(255, 255, 255, 0.87)',
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word'
            }}>
              {handleExportJson()}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlowchartMaker;