
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, ArrowUp, Bell, Settings, User } from 'lucide-react';

const Dashboard = () => {
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
              <Link to="/simulator" className="text-gray-600 hover:text-blue-600 transition-colors">
                Simulador
              </Link>
              <Link to="/marketplace" className="text-gray-600 hover:text-blue-600 transition-colors">
                Marketplace
              </Link>
              <Link to="/dashboard" className="text-blue-600 font-medium">
                Dashboard
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-2">Acompanhe seu consumo e performance energética</p>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="shadow-lg border-0">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Consumo Atual</p>
                    <p className="text-2xl font-bold text-gray-900">45,230 kWh</p>
                  </div>
                  <div className="flex items-center text-green-600">
                    <ArrowDown className="h-4 w-4" />
                    <span className="text-sm font-medium">5%</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">vs. mês anterior</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Economia Mensal</p>
                    <p className="text-2xl font-bold text-green-600">R$ 3,420</p>
                  </div>
                  <div className="flex items-center text-green-600">
                    <ArrowUp className="h-4 w-4" />
                    <span className="text-sm font-medium">12%</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">vs. tarifa convencional</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Fatura Atual</p>
                    <p className="text-2xl font-bold text-gray-900">R$ 25,680</p>
                  </div>
                  <div className="flex items-center text-green-600">
                    <ArrowDown className="h-4 w-4" />
                    <span className="text-sm font-medium">15%</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">vs. mercado cativo</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Eficiência</p>
                    <p className="text-2xl font-bold text-blue-600">94%</p>
                  </div>
                  <div className="flex items-center text-green-600">
                    <ArrowUp className="h-4 w-4" />
                    <span className="text-sm font-medium">2%</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">índice de performance</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Gráfico de Consumo */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Histórico de Consumo</CardTitle>
                  <CardDescription>Últimos 12 meses (kWh)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 rounded-lg">
                    <div className="text-center text-gray-500">
                      <Settings className="mx-auto h-12 w-12 mb-4 opacity-50" />
                      <p>Gráfico de consumo será implementado aqui</p>
                      <p className="text-sm">Integração com dados da CCEE</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Alertas e Notificações */}
            <div className="space-y-6">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="h-5 w-5" />
                    <span>Alertas</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Pico de Demanda</p>
                      <p className="text-xs text-gray-600">Consumo 15% acima da média às 14h</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Meta Atingida</p>
                      <p className="text-xs text-gray-600">Economia de 15% alcançada este mês</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Nova Oferta</p>
                      <p className="text-xs text-gray-600">Proposta 18% melhor disponível</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Contrato Atual</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Comercializadora:</span>
                    <span className="text-sm font-medium">EnerTech Solutions</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Tarifa:</span>
                    <span className="text-sm font-medium">R$ 0,58/kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Vigência:</span>
                    <span className="text-sm font-medium">Até 12/2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Status:</span>
                    <Badge className="bg-green-100 text-green-700">Ativo</Badge>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Ver Detalhes do Contrato
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Próximas Ações */}
          <Card className="mt-8 shadow-lg border-0">
            <CardHeader>
              <CardTitle>Ações Recomendadas</CardTitle>
              <CardDescription>Otimize ainda mais sua gestão energética</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <Settings className="mx-auto h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="font-medium mb-2">Otimizar Demanda</h3>
                  <p className="text-sm text-gray-600 mb-4">Ajuste sua demanda contratada baseado no histórico</p>
                  <Button variant="outline" size="sm">Analisar</Button>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <Bell className="mx-auto h-8 w-8 text-green-600 mb-4" />
                  <h3 className="font-medium mb-2">Renovar Contrato</h3>
                  <p className="text-sm text-gray-600 mb-4">Seu contrato vence em 8 meses. Compare novas ofertas</p>
                  <Link to="/marketplace">
                    <Button variant="outline" size="sm">Ver Ofertas</Button>
                  </Link>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <User className="mx-auto h-8 w-8 text-purple-600 mb-4" />
                  <h3 className="font-medium mb-2">Consultoria</h3>
                  <p className="text-sm text-gray-600 mb-4">Agende uma análise detalhada com nossos especialistas</p>
                  <Button variant="outline" size="sm">Agendar</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
