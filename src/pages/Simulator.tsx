
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowDown } from 'lucide-react';

const Simulator = () => {
  const [consumo, setConsumo] = useState('');
  const [demanda, setDemanda] = useState('');
  const [tarifa, setTarifa] = useState('');
  const [segmento, setSegmento] = useState('');
  const [resultado, setResultado] = useState<any>(null);

  const calcularEconomia = () => {
    if (!consumo || !demanda || !tarifa) return;
    
    const consumoNum = parseFloat(consumo);
    const demandaNum = parseFloat(demanda);
    const tarifaNum = parseFloat(tarifa);
    
    const custoAtual = (consumoNum * tarifaNum) + (demandaNum * 45); // Tarifa de demanda média
    const economiaPotencial = custoAtual * 0.15; // 15% de economia média
    const novaFatura = custoAtual - economiaPotencial;
    const economiaAnual = economiaPotencial * 12;
    
    setResultado({
      custoAtual,
      novaFatura,
      economiaMensal: economiaPotencial,
      economiaAnual,
      percentualEconomia: 15
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                EnergyConnect
              </span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/simulator" className="text-blue-600 font-medium">
                Simulador
              </Link>
              <Link to="/marketplace" className="text-gray-600 hover:text-blue-600 transition-colors">
                Marketplace
              </Link>
              <Link to="/dashboard" className="text-gray-600 hover:text-blue-600 transition-colors">
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Simulador de Economia
            </h1>
            <p className="text-xl text-gray-600">
              Descubra quanto você pode economizar migrando para o mercado livre de energia
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Formulário */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Dados do seu Consumo</CardTitle>
                <CardDescription>
                  Preencha as informações da sua conta de energia atual
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="segmento">Segmento</Label>
                  <Select value={segmento} onValueChange={setSegmento}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione seu segmento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="industrial">Industrial</SelectItem>
                      <SelectItem value="comercial">Comercial</SelectItem>
                      <SelectItem value="rural">Rural</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="consumo">Consumo Mensal (kWh)</Label>
                  <Input
                    id="consumo"
                    type="number"
                    placeholder="Ex: 50000"
                    value={consumo}
                    onChange={(e) => setConsumo(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="demanda">Demanda Contratada (kW)</Label>
                  <Input
                    id="demanda"
                    type="number"
                    placeholder="Ex: 150"
                    value={demanda}
                    onChange={(e) => setDemanda(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="tarifa">Tarifa Atual (R$/kWh)</Label>
                  <Input
                    id="tarifa"
                    type="number"
                    step="0.01"
                    placeholder="Ex: 0.65"
                    value={tarifa}
                    onChange={(e) => setTarifa(e.target.value)}
                  />
                </div>

                <Button 
                  onClick={calcularEconomia}
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                  size="lg"
                >
                  Calcular Economia
                </Button>
              </CardContent>
            </Card>

            {/* Resultado */}
            {resultado ? (
              <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-blue-50">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-700">Resultado da Simulação</CardTitle>
                  <CardDescription>
                    Sua economia potencial no mercado livre
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      {resultado.percentualEconomia}%
                    </div>
                    <p className="text-sm text-gray-600">de economia potencial</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="text-gray-600">Custo Atual Mensal:</span>
                      <span className="font-semibold text-red-600">
                        R$ {resultado.custoAtual.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
                      </span>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="text-gray-600">Nova Fatura Estimada:</span>
                      <span className="font-semibold text-green-600">
                        R$ {resultado.novaFatura.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
                      </span>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-green-100 rounded-lg">
                      <span className="text-gray-700 font-medium">Economia Mensal:</span>
                      <span className="font-bold text-green-700 text-lg">
                        R$ {resultado.economiaMensal.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
                      </span>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-blue-100 rounded-lg">
                      <span className="text-gray-700 font-medium">Economia Anual:</span>
                      <span className="font-bold text-blue-700 text-xl">
                        R$ {resultado.economiaAnual.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link to="/marketplace">
                      <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700" size="lg">
                        Ver Ofertas Disponíveis
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-lg border-0 bg-gray-50">
                <CardContent className="flex items-center justify-center h-full min-h-[400px]">
                  <div className="text-center text-gray-500">
                    <ArrowDown className="mx-auto h-12 w-12 mb-4 opacity-50" />
                    <p>Preencha os dados ao lado para ver sua economia potencial</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Informações Adicionais */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-blue-600 mb-2">500+</div>
                <p className="text-sm text-gray-600">Empresas Conectadas</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-green-600 mb-2">15%</div>
                <p className="text-sm text-gray-600">Economia Média</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-purple-600 mb-2">R$ 2M+</div>
                <p className="text-sm text-gray-600">Economizados pelos Clientes</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulator;
