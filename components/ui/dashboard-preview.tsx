"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui";
import { companyData } from "@/lib/data";

export const DashboardPreview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
    >
      <Card variant="elevated" padding="lg" className="relative">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Panel de Control</h3>
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Card variant="default" padding="md" className="bg-primary-50">
              <div className="text-2xl font-bold text-primary-600">{companyData.stats.activeMembers}</div>
              <div className="text-sm text-gray-600">Miembros Activos</div>
            </Card>
            <Card variant="default" padding="md" className="bg-secondary-50">
              <div className="text-2xl font-bold text-secondary-600">€{companyData.stats.monthlyRevenue.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Ingresos Mes</div>
            </Card>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Ocupación hoy</span>
              <span className="font-medium">{companyData.stats.occupancyRate}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-primary-600 h-2 rounded-full" style={{ width: `${companyData.stats.occupancyRate}%` }}></div>
            </div>
          </div>
        </div>
      </Card>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Card variant="elevated" padding="sm" className="absolute -top-4 -right-4">
          <div className="text-xs text-gray-500">Nuevo miembro</div>
          <div className="font-medium text-sm">Ana García</div>
        </Card>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      >
        <Card variant="elevated" padding="sm" className="absolute -bottom-4 -left-4">
          <div className="text-xs text-gray-500">Pago recibido</div>
          <div className="font-medium text-sm text-green-600">+€45</div>
        </Card>
      </motion.div>
    </motion.div>
  );
};