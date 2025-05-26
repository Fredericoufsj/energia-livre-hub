import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Check, Settings } from 'lucide-react';

const Marketplace = () => {
  const [filtroRegiao, setFiltroRegiao] = useState('');
  const [filtroTipo, setFiltroTipo] = useState('');

  const ofertas = [
    {
      id: 1,
      comercializadora: "EnerTech Solutions",
      tipo: "Energia Convencional",
      preco: 0.58,
      desconto: "12%",
      regiao: "Sudeste",
      rating: 4.8,
      verificada: true,
      vantagens: ["Sem taxa de adesão", "Suporte 24/7", "Contrato flexível"]
    },
    {
      id: 2,
      comercializadora: "GreenPower Brasil",
      tipo: "Energia Renovável",
      preco: 0.61,
      desconto: "9%",
      regiao: "Sul",
      rating: 4.9,
      verificada: true,
      vantagens: ["100% renovável", "Certificação I-REC", "Desconto sustentabilidade"]
    },
    {
      id: 3,
      comercializadora: "PowerMax Energy",
      tipo: "Energia Convencional",
      preco: 0.55,
      desconto: "15%",
      regiao: "Nordeste",
      rating: 4.6,
      verificada: true,
      vantagens: ["Melhor preço", "Gestão completa", "App exclusivo"]
    },
    {
      id: 4,
      comercializadora: "Solar Connect",
      tipo: "Energia Solar",
      preco: 0.62,
      desconto: "8%",
      regiao: "Sudeste",
      rating: 4.7,
      verificada: true,
      vantagens: ["Fonte solar", "Impacto zero", "Monitoramento em tempo real"]
    },
    {
      id: 5,
      comercializadora: "WindForce Energy",
      tipo: "Energia Eólica",
      preco: 0.59,
      desconto: "11%",
      regiao: "Nordeste",
      rating: 4.5,
      verificada: true,
      vantagens: ["Fonte eólica", "Preço competitivo", "Longo prazo"]
    },
    {
      id: 6,
      comercializadora: "HydroMax Brasil",
      tipo: "Energia Hidrelétrica",
      preco: 0.57,
      desconto: "13%",
      regiao: "Sul",
      rating: 4.8,
      verificada: true,
      vantagens: ["Fonte hídrica", "Estabilidade", "Tradição no mercado"]
    }
  ];

  const ofertasFiltradas = ofertas.filter(oferta => {
    if (filtroRegiao && oferta.regiao !== filtroRegiao) return false;
    if (filtroTipo && oferta.tipo !== filtroTipo) return false;
    return true;
  });

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
              <Link to="/marketplace" className="text-blue-600 font-medium">
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Marketplace de Energia
            </h1>
            <p className="text-xl text-gray-600">
              Compare e escolha as melhores ofertas de comercializadoras verificadas
            </p>
          </div>

          {/* Filtros */}
          <Card className="mb-8 shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Search className="h-5 w-5" />
                <span>Filtrar Ofertas</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Buscar</label>
                  <Input placeholder="Nome da comercializadora..." />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Região</label>
                  <Select value={filtroRegiao} onValueChange={setFiltroRegiao}>
                    <SelectTrigger>
                      <SelectValue placeholder="Todas as regiões" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sudeste">Sudeste</SelectItem>
                      <SelectItem value="sul">Sul</SelectItem>
                      <SelectItem value="nordeste">Nordeste</SelectItem>
                      <SelectItem value="norte">Norte</SelectItem>
                      <SelectItem value="centro-oeste">Centro-Oeste</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Tipo de Energia</label>
                  <Select value={filtroTipo} onValueChange={setFiltroTipo}>
                    <SelectTrigger>
                      <SelectValue placeholder="Todos os tipos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="convencional">Convencional</SelectItem>
                      <SelectItem value="renovavel">Renovável</SelectItem>
                      <SelectItem value="solar">Solar</SelectItem>
                      <SelectItem value="eolica">Eólica</SelectItem>
                      <SelectItem value="hidrica">Hidrelétrica</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                    Aplicar Filtros
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lista de Ofertas */}
          <div className="grid lg:grid-cols-2 gap-6">
            {ofertasFiltradas.map((oferta) => (
              <Card key={oferta.id} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl flex items-center space-x-2">
                        <span>{oferta.comercializadora}</span>
                        {oferta.verificada && (
                          <Badge variant="secondary" className="bg-green-100 text-green-700">
                            <Check className="h-3 w-3 mr-1" />
                            Verificada
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {oferta.tipo} • {oferta.regiao}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">
                        R$ {oferta.preco.toFixed(2)}/kWh
                      </div>
                      <Badge className="bg-orange-100 text-orange-700">
                        {oferta.desconto} de desconto
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Avaliação:</span>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-500">★★★★★</span>
                        <span className="text-sm font-medium">{oferta.rating}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Vantagens:</h4>
                      <ul className="space-y-1">
                        {oferta.vantagens.map((vantagem, index) => (
                          <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                            <Check className="h-3 w-3 text-green-500 flex-shrink-0" />
                            <span>{vantagem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex space-x-2 pt-4">
                      <Button variant="outline" className="flex-1">
                        Ver Detalhes
                      </Button>
                      <Button className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                        Contratar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white border-0">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-bold mb-4">Não encontrou a oferta ideal?</h3>
                <p className="text-blue-100 mb-6">
                  Nossa equipe pode ajudar você a encontrar a melhor opção para seu perfil de consumo
                </p>
                <Button variant="secondary" size="lg">
                  Falar com Especialista
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
