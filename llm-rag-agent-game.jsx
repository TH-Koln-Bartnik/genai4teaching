import React, { useState } from 'react';
import { ShoppingBag, Database, Wrench, Sparkles, CheckCircle, XCircle } from 'lucide-react';

const LLMRAGAgentGame = () => {
  const [currentStep, setCurrentStep] = useState('intro');
  const [currentSystem, setCurrentSystem] = useState(null);
  const [llmAnswer, setLlmAnswer] = useState('');
  const [ragContext, setRagContext] = useState('');
  const [agentRole, setAgentRole] = useState('');
  const [agentTool, setAgentTool] = useState('');
  const [showResults, setShowResults] = useState(false);

  const resetGame = () => {
    setCurrentStep('intro');
    setCurrentSystem(null);
    setLlmAnswer('');
    setRagContext('');
    setAgentRole('');
    setAgentTool('');
    setShowResults(false);
  };

  const startSystem = (system) => {
    setCurrentSystem(system);
    setCurrentStep('question');
    setShowResults(false);
  };

  const checkAnswer = (answer, correct) => {
    return answer.toLowerCase().trim() === correct.toLowerCase().trim();
  };

  // Intro Screen
  if (currentStep === 'intro') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
              🍼 Das Baby-Geschäft Experiment
            </h1>
            <p className="text-xl text-gray-600 mb-6 text-center">
              Entdecke die Unterschiede zwischen LLM, RAG und Agent
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-lg">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">🎯 Deine Aufgabe:</h2>
              <p className="text-gray-700 mb-4">
                Du bist in einem <strong>Baby-Geschäft</strong> und stellst die gleiche Frage an drei verschiedene KI-Systeme:
              </p>
              <p className="text-2xl font-bold text-center text-blue-700 bg-white p-4 rounded-lg shadow">
                "Wie viel kosten zwei Tüten?"
              </p>
              <p className="text-gray-700 mt-4">
                Beobachte, wie unterschiedlich die Systeme reagieren – und warum!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Sparkles className="w-12 h-12 mx-auto mb-2 text-purple-600" />
                <h3 className="font-semibold text-gray-800">LLM</h3>
                <p className="text-sm text-gray-600">Nur Trainingsdaten</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Database className="w-12 h-12 mx-auto mb-2 text-green-600" />
                <h3 className="font-semibold text-gray-800">RAG</h3>
                <p className="text-sm text-gray-600">Mit Datenbankzugriff</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <Wrench className="w-12 h-12 mx-auto mb-2 text-orange-600" />
                <h3 className="font-semibold text-gray-800">Agent</h3>
                <p className="text-sm text-gray-600">Mit Tools & Rollen</p>
              </div>
            </div>

            <p className="text-center text-gray-600 mb-6 italic">
              Basierend auf dem Workbook von Prof. Tom Yeh
            </p>

            <button
              onClick={() => setCurrentStep('menu')}
              className="w-full bg-indigo-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg"
            >
              Los geht's! 🚀
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Menu
  if (currentStep === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Wähle ein System
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Klicke auf ein System, um zu sehen, wie es auf deine Frage reagiert
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <button
                onClick={() => startSystem('llm')}
                className="bg-purple-50 border-2 border-purple-200 hover:border-purple-400 rounded-xl p-6 transition-all hover:shadow-lg group"
              >
                <Sparkles className="w-16 h-16 mx-auto mb-4 text-purple-600 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">LLM</h3>
                <p className="text-sm text-gray-600">Large Language Model</p>
                <p className="text-xs text-gray-500 mt-2">Nutzt nur Trainingsdaten</p>
              </button>

              <button
                onClick={() => startSystem('rag')}
                className="bg-green-50 border-2 border-green-200 hover:border-green-400 rounded-xl p-6 transition-all hover:shadow-lg group"
              >
                <Database className="w-16 h-16 mx-auto mb-4 text-green-600 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">RAG</h3>
                <p className="text-sm text-gray-600">Retrieval Augmented Generation</p>
                <p className="text-xs text-gray-500 mt-2">Holt relevante Daten</p>
              </button>

              <button
                onClick={() => startSystem('agent')}
                className="bg-orange-50 border-2 border-orange-200 hover:border-orange-400 rounded-xl p-6 transition-all hover:shadow-lg group"
              >
                <Wrench className="w-16 h-16 mx-auto mb-4 text-orange-600 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Agent</h3>
                <p className="text-sm text-gray-600">Intelligenter Agent</p>
                <p className="text-xs text-gray-500 mt-2">Wählt Tools & handelt</p>
              </button>
            </div>

            <button
              onClick={() => setCurrentStep('comparison')}
              className="w-full mt-8 bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              📊 Direkt zum Vergleich
            </button>
          </div>
        </div>
      </div>
    );
  }

  // LLM System
  if (currentStep === 'question' && currentSystem === 'llm') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-purple-700 flex items-center gap-3">
                <Sparkles className="w-8 h-8" />
                LLM System
              </h2>
              <button
                onClick={() => setCurrentStep('menu')}
                className="text-gray-500 hover:text-gray-700"
              >
                ← Zurück
              </button>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6 rounded-r-lg">
              <p className="text-lg mb-2">🗣️ Du fragst:</p>
              <p className="text-2xl font-bold text-purple-800">
                "Wie viel kosten zwei Tüten?"
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  🧠 Was macht das LLM?
                </h3>
                <p className="text-gray-700 mb-4">
                  Das LLM hat nur Zugriff auf seine <strong>Trainingsdaten aus dem Internet</strong>. 
                  Es weiß nicht, dass du in einem Baby-Geschäft bist!
                </p>
                <div className="bg-white p-4 rounded border-2 border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">💭 LLM denkt:</p>
                  <p className="italic text-gray-700">
                    "Tüten... vermutlich Einkaufstüten mit Obst oder Gemüse. 
                    Am wahrscheinlichsten: Äpfel. Eine Tüte Äpfel kostet etwa 12€."
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-300 p-6 rounded-lg">
                <p className="font-semibold mb-3">📝 Fülle die Lücke aus:</p>
                <p className="mb-2">Zwei Tüten _______ kosten etwa 24€.</p>
                <input
                  type="text"
                  value={llmAnswer}
                  onChange={(e) => setLlmAnswer(e.target.value)}
                  placeholder="Was glaubt das LLM?"
                  className="w-full p-3 border-2 border-yellow-300 rounded-lg mb-3"
                />
                {llmAnswer && (
                  <div className="mt-3">
                    {checkAnswer(llmAnswer, 'Äpfel') || checkAnswer(llmAnswer, 'Apfel') ? (
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle className="w-5 h-5" />
                        <span>Richtig! Das LLM rät "Äpfel"</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-red-600">
                        <XCircle className="w-5 h-5" />
                        <span>Nicht ganz. Tipp: Was kauft man oft in Tüten?</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {(checkAnswer(llmAnswer, 'Äpfel') || checkAnswer(llmAnswer, 'Apfel')) && (
                <div className="bg-red-50 border-2 border-red-300 p-6 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                    ❌ Problem erkannt!
                  </h3>
                  <p className="text-gray-700">
                    Du bist aber in einem <strong>Baby-Geschäft</strong>! Die Tüten enthalten wahrscheinlich 
                    <strong> Windeln</strong>, nicht Äpfel. Das LLM hat falsch geraten, weil es den 
                    <strong> Kontext nicht kennt</strong>.
                  </p>
                </div>
              )}

              {(checkAnswer(llmAnswer, 'Äpfel') || checkAnswer(llmAnswer, 'Apfel')) && (
                <button
                  onClick={() => setCurrentStep('menu')}
                  className="w-full bg-purple-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Weiter zum nächsten System →
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // RAG System
  if (currentStep === 'question' && currentSystem === 'rag') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-green-700 flex items-center gap-3">
                <Database className="w-8 h-8" />
                RAG System
              </h2>
              <button
                onClick={() => setCurrentStep('menu')}
                className="text-gray-500 hover:text-gray-700"
              >
                ← Zurück
              </button>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded-r-lg">
              <p className="text-lg mb-2">🗣️ Du fragst:</p>
              <p className="text-2xl font-bold text-green-800">
                "Wie viel kosten zwei Tüten?"
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  🔍 Schritt 1: Datenbank durchsuchen
                </h3>
                <p className="text-gray-700 mb-4">
                  Das RAG-System durchsucht <strong>zuerst die Geschäftsdatenbank</strong>, 
                  bevor es antwortet!
                </p>
                <div className="bg-white p-4 rounded border-2 border-green-200">
                  <p className="text-sm text-gray-600 mb-2">🗄️ Datenbank gefunden:</p>
                  <div className="bg-green-100 p-3 rounded font-mono text-sm">
                    Produkt: Windeln<br />
                    Preis: 10€ pro Tüte
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-300 p-6 rounded-lg">
                <p className="font-semibold mb-3">📝 Fülle die Lücke aus:</p>
                <p className="mb-2">Das RAG-System hat aus der _______ die Information geholt, dass Windeln 10€ kosten.</p>
                <input
                  type="text"
                  value={ragContext}
                  onChange={(e) => setRagContext(e.target.value)}
                  placeholder="Woher kommen die Daten?"
                  className="w-full p-3 border-2 border-yellow-300 rounded-lg mb-3"
                />
                {ragContext && (
                  <div className="mt-3">
                    {checkAnswer(ragContext, 'Datenbank') || checkAnswer(ragContext, 'Database') ? (
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle className="w-5 h-5" />
                        <span>Richtig! RAG holt Daten aus der Datenbank</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-red-600">
                        <XCircle className="w-5 h-5" />
                        <span>Nicht ganz. Tipp: Wo werden Geschäftsdaten gespeichert?</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {(checkAnswer(ragContext, 'Datenbank') || checkAnswer(ragContext, 'Database')) && (
                <>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      💬 Schritt 2: LLM generiert Antwort
                    </h3>
                    <div className="bg-white p-4 rounded border-2 border-green-200">
                      <p className="text-sm text-gray-600 mb-2">📨 Augmentierter Prompt an LLM:</p>
                      <div className="bg-gray-100 p-3 rounded font-mono text-sm mb-3">
                        Kontext: Windeln kosten 10€ pro Tüte<br />
                        Anweisung: Antwort kurz halten<br />
                        Frage: Wie viel kosten zwei Tüten?
                      </div>
                      <p className="text-sm text-gray-600 mb-2">🤖 LLM antwortet:</p>
                      <div className="bg-green-100 p-3 rounded font-semibold">
                        "20€"
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border-2 border-green-300 p-6 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                      ✅ Korrekte Antwort!
                    </h3>
                    <p className="text-gray-700">
                      Das RAG-System hat die <strong>richtige Antwort</strong> gegeben, weil es 
                      <strong> echte Daten aus der Datenbank</strong> verwendet hat – nicht nur geraten!
                    </p>
                  </div>

                  <button
                    onClick={() => setCurrentStep('menu')}
                    className="w-full bg-green-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Weiter zum nächsten System →
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Agent System
  if (currentStep === 'question' && currentSystem === 'agent') {
    const hasRole = checkAnswer(agentRole, 'Verkäufer') || 
                    checkAnswer(agentRole, 'Verkaufsberater') || 
                    checkAnswer(agentRole, 'Promotion') ||
                    agentRole.toLowerCase().includes('verkauf') ||
                    agentRole.toLowerCase().includes('promotion');
    
    const hasTool = checkAnswer(agentTool, 'Rabatt') || 
                    checkAnswer(agentTool, 'Discount') ||
                    agentTool.toLowerCase().includes('rabatt') ||
                    agentTool.toLowerCase().includes('coupon');

    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-orange-700 flex items-center gap-3">
                <Wrench className="w-8 h-8" />
                Agent System
              </h2>
              <button
                onClick={() => setCurrentStep('menu')}
                className="text-gray-500 hover:text-gray-700"
              >
                ← Zurück
              </button>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6 rounded-r-lg">
              <p className="text-lg mb-2">🗣️ Du fragst:</p>
              <p className="text-2xl font-bold text-orange-800">
                "Wie viel kosten zwei Tüten?"
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  🎭 Der Agent bekommt eine Rolle
                </h3>
                <p className="text-gray-700 mb-4">
                  Anders als LLM und RAG bekommt der Agent eine <strong>Rolle zugewiesen</strong>: 
                  Er soll als <strong>Verkaufsberater</strong> agieren!
                </p>
                <div className="bg-white p-4 rounded border-2 border-orange-200">
                  <p className="text-sm text-gray-600 mb-2">🎯 Rollenbeschreibung:</p>
                  <div className="bg-orange-100 p-3 rounded italic">
                    "Du bist ein Verkaufsberater im Baby-Geschäft. Dein Ziel ist es, 
                    Kunden zu begeistern und Verkäufe zu fördern."
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-300 p-6 rounded-lg">
                <p className="font-semibold mb-3">📝 Fülle die Lücke aus:</p>
                <p className="mb-2">Der Agent agiert als _______.</p>
                <input
                  type="text"
                  value={agentRole}
                  onChange={(e) => setAgentRole(e.target.value)}
                  placeholder="Welche Rolle?"
                  className="w-full p-3 border-2 border-yellow-300 rounded-lg mb-3"
                />
                {agentRole && (
                  <div className="mt-3">
                    {hasRole ? (
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle className="w-5 h-5" />
                        <span>Richtig! Der Agent ist ein Verkaufsberater/Promoter</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-red-600">
                        <XCircle className="w-5 h-5" />
                        <span>Nicht ganz. Tipp: Wer möchte Produkte verkaufen?</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {hasRole && (
                <>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      🛠️ Schritt 1: Tool-Auswahl
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Der Agent hat mehrere Tools zur Verfügung:
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-white p-3 rounded border-2 border-gray-200">
                        <strong>🗄️ Datenbank</strong>
                        <p className="text-sm text-gray-600">Preise nachschlagen</p>
                      </div>
                      <div className="bg-white p-3 rounded border-2 border-gray-200">
                        <strong>🎁 Rabatt</strong>
                        <p className="text-sm text-gray-600">Gutschein erstellen</p>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border-2 border-orange-200">
                      <p className="text-sm text-gray-600 mb-2">💭 Agent entscheidet:</p>
                      <p className="italic text-gray-700">
                        "Als Verkaufsberater sollte ich den Kunden begeistern! 
                        Statt nur den Preis zu nennen, erstelle ich einen attraktiven Rabatt-Code."
                      </p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-2 border-yellow-300 p-6 rounded-lg">
                    <p className="font-semibold mb-3">📝 Fülle die Lücke aus:</p>
                    <p className="mb-2">Welches Tool wählt der Agent?</p>
                    <input
                      type="text"
                      value={agentTool}
                      onChange={(e) => setAgentTool(e.target.value)}
                      placeholder="Datenbank oder Rabatt?"
                      className="w-full p-3 border-2 border-yellow-300 rounded-lg mb-3"
                    />
                    {agentTool && (
                      <div className="mt-3">
                        {hasTool ? (
                          <div className="flex items-center gap-2 text-green-600">
                            <CheckCircle className="w-5 h-5" />
                            <span>Richtig! Der Agent wählt das Rabatt-Tool</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-red-600">
                            <XCircle className="w-5 h-5" />
                            <span>Nicht ganz. Was würde ein Verkaufsberater tun?</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </>
              )}

              {hasRole && hasTool && (
                <>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      🔄 Schritt 2: Tool ausführen
                    </h3>
                    <div className="bg-white p-4 rounded border-2 border-orange-200 mb-3">
                      <p className="text-sm text-gray-600 mb-2">🛠️ Rabatt-Server Aufruf:</p>
                      <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                        create_discount(15%)<br />
                        → Code: HAPPY36
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      💬 Schritt 3: Finale Antwort generieren
                    </h3>
                    <div className="bg-white p-4 rounded border-2 border-orange-200">
                      <p className="text-sm text-gray-600 mb-2">🤖 Agent antwortet:</p>
                      <div className="bg-orange-100 p-4 rounded font-semibold text-lg">
                        "Hier ist Ihr 15% Rabatt-Code: HAPPY36 🎉"
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 border-2 border-orange-300 p-6 rounded-lg">
                    <h3 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
                      ✨ Intelligente Entscheidung!
                    </h3>
                    <p className="text-gray-700">
                      Der Agent hat <strong>nicht einfach den Preis genannt</strong>, sondern 
                      <strong> intelligent entschieden</strong>, welches Tool am besten zu seiner 
                      Rolle passt. Das ist der Unterschied zu RAG!
                    </p>
                  </div>

                  <button
                    onClick={() => setCurrentStep('menu')}
                    className="w-full bg-orange-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors"
                  >
                    Zurück zum Menü
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Comparison View
  if (currentStep === 'comparison') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              📊 Vergleich: LLM vs RAG vs Agent
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
              <p className="text-lg font-semibold mb-2">Die gleiche Frage, drei verschiedene Antworten:</p>
              <p className="text-2xl font-bold text-blue-700">
                "Wie viel kosten zwei Tüten?" (im Baby-Geschäft)
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* LLM */}
              <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                  <h3 className="text-xl font-bold text-purple-700">LLM</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Wissensquelle:</p>
                    <p className="text-sm text-gray-600">Nur Trainingsdaten aus dem Internet</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Ablauf:</p>
                    <p className="text-sm text-gray-600">Ein-Schritt-Logik: Frage → Antwort</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Antwort:</p>
                    <p className="text-sm bg-white p-2 rounded border border-purple-300">
                      "Zwei Tüten Äpfel kosten 24€"
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-red-700">Problem:</p>
                    <p className="text-sm text-red-600">❌ Falsch! Kontext nicht bekannt</p>
                  </div>
                </div>
              </div>

              {/* RAG */}
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Database className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-bold text-green-700">RAG</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Wissensquelle:</p>
                    <p className="text-sm text-gray-600">Datenbank + Trainingsdaten</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Ablauf:</p>
                    <p className="text-sm text-gray-600">Abrufen → Dann antworten</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Antwort:</p>
                    <p className="text-sm bg-white p-2 rounded border border-green-300">
                      "20€"
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-green-700">Vorteil:</p>
                    <p className="text-sm text-green-600">✅ Korrekt! Nutzt echte Daten</p>
                  </div>
                </div>
              </div>

              {/* Agent */}
              <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Wrench className="w-6 h-6 text-orange-600" />
                  <h3 className="text-xl font-bold text-orange-700">Agent</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Wissensquelle:</p>
                    <p className="text-sm text-gray-600">Tools & APIs + Trainingsdaten</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Ablauf:</p>
                    <p className="text-sm text-gray-600">Mehrschritt-Logik mit Tool-Wahl</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Antwort:</p>
                    <p className="text-sm bg-white p-2 rounded border border-orange-300">
                      "Ihr 15% Rabatt-Code: HAPPY36 🎉"
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-orange-700">Vorteil:</p>
                    <p className="text-sm text-orange-600">✨ Intelligent! Wählt beste Aktion</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Differences Table */}
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🔑 Kernunterschiede</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left p-3 font-semibold">Aspekt</th>
                      <th className="text-left p-3 font-semibold text-purple-700">LLM</th>
                      <th className="text-left p-3 font-semibold text-green-700">RAG</th>
                      <th className="text-left p-3 font-semibold text-orange-700">Agent</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-gray-200">
                      <td className="p-3 font-semibold">Wissensquelle</td>
                      <td className="p-3">Internet-Trainingsdaten</td>
                      <td className="p-3">Abgerufene echte Daten</td>
                      <td className="p-3">Tools & APIs</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-3 font-semibold">Kontroll-Logik</td>
                      <td className="p-3">Ein-Schritt</td>
                      <td className="p-3">Abrufen → Antworten</td>
                      <td className="p-3">Mehrschritt-Reasoning</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-3 font-semibold">Kontext</td>
                      <td className="p-3">❌ Kein Zugriff</td>
                      <td className="p-3">✅ Spezifische Daten</td>
                      <td className="p-3">✅ Rollenbasiert</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Entscheidung</td>
                      <td className="p-3">Keine</td>
                      <td className="p-3">Keine</td>
                      <td className="p-3">✅ Wählt Tools intelligent</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-indigo-50 border-2 border-indigo-300 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-indigo-800 mb-3">💡 Was hast du gelernt?</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">→</span>
                  <span><strong>LLM</strong> nutzt nur Trainingsdaten und rät den Kontext</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">→</span>
                  <span><strong>RAG</strong> holt relevante Fakten aus Datenbanken für präzise Antworten</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">→</span>
                  <span><strong>Agent</strong> entscheidet intelligent, welche Tools zu nutzen sind, basierend auf seiner Rolle</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setCurrentStep('menu')}
                className="flex-1 bg-gray-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                ← Nochmal erleben
              </button>
              <button
                onClick={resetGame}
                className="flex-1 bg-indigo-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                🔄 Von vorne starten
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default LLMRAGAgentGame;
